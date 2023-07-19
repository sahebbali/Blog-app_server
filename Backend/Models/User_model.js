

//third-parity module require
const mongoose = require('mongoose');
const {Schema} = mongoose;

//user schema
const userSchema  = new Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true,
    },
    phoneNumber:{
        type:String,
        unique:true,
        require:true,
    },
    email:{
        type: String,
        trim: true,
        required: [true, "Please add email"],
        unique: true,
        match: [/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "please enter a valid emile"],
    },
    password:{
        type: String,
        required: [true, "password is Required!"],
        trim: true,
        minLength: [6, "password must be up 6 creacters"],
    },
    role:{
        type: Number,
        trim: true,
        default: 0,
    },
    createDate:{
        type:Date, 
        default:Date.now()
    }
},
{
    timestamps:true,
    versionKey:false
});


const User = mongoose.model('users', userSchema);
//customer Schema exports
module.exports = User;