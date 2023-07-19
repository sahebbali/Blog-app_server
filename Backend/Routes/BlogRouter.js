const express = require('express');
const BlogsController = require('../Controller/Blog_controller')
const { requireSignIn, isAdmin } = require('../middleware/authMiddleware');




const blogsRouter= express.Router();




blogsRouter.post('/create-blog',BlogsController.createBlogs)
blogsRouter.post('/login',BlogsController.updateBlogs)
blogsRouter.get('/getall-blogs',BlogsController.getAllBlogs)

// forgot password
blogsRouter.post('/delete-blogs',BlogsController.deleteBlogs)



  module.exports = blogsRouter;