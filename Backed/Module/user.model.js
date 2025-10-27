 const mongoose=require("mongoose")
 const encrypt = require('mongoose-encryption');
 const { v4 : uuidv4} = require('uuid');

 const userSchema=new mongoose.Schema({ 
     name:{
         type:String,
         require:true
     },
     age:{
         type:Number,
         require:true
     },
     geneticMarkers:{
         type:String,
         require:true
     },
     createdOn:{
         type:Date,
         default:Date.now()

     }
    


 })


 module.exports= mongoose.model("User",userSchema)
// const user=[
//     {
//         id:uuidv4(),
//         name:"Sohan",
//         age:22
//     },
//      {
//         id:uuidv4(),
//         name:"Sohag",
//         age:12
//     }

// ]
// module.exports=user