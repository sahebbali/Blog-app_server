const mongoose = require('mongoose');
const { mongoDB } = require('../secret');

const connectDB=async(options={})=>{
    try {
        await mongoose.connect(mongoDB,options);
        console.log("Database Connection established Successfully");
        mongoose.connection.on('error',(error)=>{
            console.log("Database Connection error: " + error)
        })
    } catch (error) {
        console.error("Database could not connect", error.toString());
    }
}

module.exports =connectDB;