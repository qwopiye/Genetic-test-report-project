
const errorResponse=(res,{statuCode=500,message='Inter server Error'})=>{
       return res.status(statuCode).json({
    
        sucess: false,
        message:message
  
   })

}

const sucessResponse=(res,{statuCode=200,message='sucess'},payload={}) => {
       return res.status(statuCode).json({
    
        sucess: true,
        message:message,
        payload,
  
   });

}

module.exports={errorResponse,sucessResponse}