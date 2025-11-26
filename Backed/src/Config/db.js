const mongoose=require("mongoose")
const { mongdbUrl } = require("../sceret")


const mongoDatabase=async(option={})=>{
    try {
        await mongoose.connect(mongdbUrl,option);
        console.log("mongodb database is Connection Sucessfully")
        mongoose.connection.on('error',(error)=>{
            console.error("the mongodb connecction error",error)
        })
        
    } catch (error) {
        console.error("can not the connet Db", error.toString());
        
    }
};

module.exports=mongoDatabase