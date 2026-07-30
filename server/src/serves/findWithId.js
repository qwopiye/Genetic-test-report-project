const createError= require('http-errors')
const  mongoose = require('mongoose');
const User = require('../Models/userModel')


const findWithId=async(model,id ,options={})=>{
   try {
        
        const item=await model.findById(id,options);
        if(!item) {throw createError(404,`${model}item not Found`)};
        return item;
    
   } catch (error) {
    
     if(error instanceof mongoose.Error){
        throw  createError(400,"invalid user id");
     }
     throw error
   }

        
    
}
module.exports=findWithId;