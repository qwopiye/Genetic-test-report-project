const Useer=require('../Module/user.model')
const {v4: uuidv}=require("uuid")

const GetAlluser=async(req,res)=>{
   await res.status(200).json({
        message:" i am a get method"
    })
};

const CreatAlluser=(req,res)=>{
    res.status(200).json({
        message:"post method" 
    })
};
module.exports={GetAlluser,CreatAlluser}