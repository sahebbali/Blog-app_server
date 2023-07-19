const express = require("express");
const app = new express();
// const Router = require("./Router/Router");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const createError = require('http-errors')
const rateLimiter = require("express-rate-limit");

const morgan = require('morgan');
const userRouter = require("./Routes/UserRouter");
const blogsRouter = require("./Routes/BlogRouter");




// middleware function
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet()); 
app.use(cors()); 
app.use(hpp());


const limiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message:"Too many requests from the IP. please try agian later"
});

app.use(limiter);



app.use('/api/v1/users',userRouter)
app.use('/api/v1/blogs',blogsRouter)


//client-error handeling
app.use((req, res,next)=>{
  
 next(createError(404, "route not found"))
})

//server-error handeling==all errors
app.use((err,req, res,next)=>{
  return res.status(err.status || 500).json
  ({success:false, 
    message:err.message})
})


module.exports=app;

