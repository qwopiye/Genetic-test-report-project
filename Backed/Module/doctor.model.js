const mongoose=require("mongoose")
const encrypt = require('mongoose-encryption');
const { v4 : uuidv4} = require('uuid');

const userSchema=new mongoose.Schema({ 
    Name:{
        type:String,
        require:true
    },
    ID:{
        type:Number,
        require:true
    },
    Password:{
        type:String,
        require:true
    },
    createdOn:{
        type:Date,
        default:Date.now()

    }
    


})


module.exports= mongoose.model("User",userSchema)