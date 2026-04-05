const createError= require('http-errors')
const jwt=require("jsonwebtoken");
const { jwtAcessKye } = require('../sceret');

const isLoggedIn=(req,res,next)=>{
    try {

        const tokens=req.cookies.access_token;
        console.log( tokens);
        if(!tokens){
            throw createError(404,"please login ")
        }

      const decode=jwt.verify(tokens,jwtAcessKye)
      console.log(decode)
        if(!decode){ 
            throw createError(402,"please login agin")}
         //const userId=decode._id;
        // console.log(decode.userId)
        next();
        
    } catch (error) {
        return next(error)
        
    }
}


const isLoggedOut=(req,res,next)=>{
    try {

        const token=req.cookies.access_token;


        if(token){
            try {
                 const decode=jwt.verify(token,jwtAcessKye)
                 if(decode){
                    createError(402,"User alrready logged in")
                 }

            } catch (error) {
                throw error
            }
         }
       
        next();
        
    } catch (error) {
        return next(error)
        
    }
}



module.exports={isLoggedIn,isLoggedOut}