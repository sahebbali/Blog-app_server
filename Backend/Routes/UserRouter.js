const express = require('express');
const { getUser, registerController, loginController, forgotPasswordController, testController } = require('../Controller/User_controller');
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware');




const userRouter= express.Router();



userRouter.get('/',getUser)

userRouter.post('/register',registerController)
userRouter.post('/login',loginController)

// forgot password
userRouter.post('/forgot-password',forgotPasswordController)

// test router
userRouter.get('/test',requireSignIn, isAdmin,testController)

  module.exports = userRouter;