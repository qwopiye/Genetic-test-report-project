const createError= require('http-errors')

const User = require('../Models/userModel');

const  sucessResponse  = require('./ResponseController');
const  mongoose  = require('mongoose');
const findWithId = require('../serves/findWithId');
const { options } = require('../app');
//const e = require('express');
const {  jwtActivatedToken, clienturl } = require('../sceret');
//const creatwebToken = require('../serves/jsonwebtoken');
//const emailNodeMailer = require('../helper/email');

const createUser= async(req,res,next)=>{
    try {
    const search=req.query.search||"";
    const page=Number(req.query.page) || 1;
    const limit=Number(req.query.limit)|| 2;

    const searchRegExp= new RegExp(".*" + search + ".*", 'i')

    const filtter={
        isAdmin: {$ne: true},
        $or:[
            {name:{$regex : searchRegExp}},
            {email:{$regex : searchRegExp}},
            {phone:{$regex : searchRegExp}}
        ],
    }
    
    const options={password: 0}

    const users= await User.find(filtter,options)
    .limit(limit)
    .skip((page-1) * limit);

    const count=await User.find(filtter).countDocuments();
    if(!users) throw createError(404,"user not Found");
    res.status(200).json({
       message:" this is home page created by Sohan ",
       users,
       pagination : {
        totalPage : Math.ceil(count / limit),
        currentPage: page,
        prevePage: page-1 > 0 ? page-1 : null,
        nextPage: page+1 <=  Math.ceil(count/ limit) ? page+1: null 

       }
       
     
    });
    return sucessResponse(res,{
        statuCode:200,
        message:'the user returned sucessfully',
        payload:{
            
        }
    })

        
    } catch (error) {
        next(error)
        
    }
}


const getUserById=async(req,res,next)=>{
    try {
        const id=req.params.id;
       const user=await findWithId(User,id,options);
       if(!user){ throw createError(404,"the user is not found")}
       
        res.status(200).json({
        message:"the user not found",
      
       user,
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid id"))
            return
         }
        next(error)
        
    }
};
const DeleteUserById=async(req,res,next)=>{
    try {
       const id=req.params.id;
       const user=await findWithId(User,id,options);
       if(!user){ throw createError(404,"the user is not found")}
       
        res.status(200).json({
        message:"the user not found",
      
       user,
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid id"))
            return
         }
        next(error)
        
    }
};

// const ProcessRegister = async (req, res, next) => {
//   try {
//     const  name = req.body;
//     const email=req.body;
//     const password=req.body;
//     const phone=req.body;
//     const address=req.body;

//     const newUser={
//         name,
//         email,
//         password,
//         phone,
//         address
//     }
//the email chacek is exit or not
    //  const emailExit=await User.exists({email : email})
    // if(emailExit){
    //     throw createError(409,'the Email is already exit, please sing in')
    // }

    //create jwt

    // const token=creatwebToken(
    //     {name,email,password,phone,address},jwtActivatedToken,'10m'
    // )
   //
    // const emaildate={
    //     email,
    //     subject:'the emailAuthentication',
    //     html:`
    //       <h1> Hello ${name}</h1>
    //       <p> please click here to <a href=" ${clienturl}/api/user/activate/${token}">Activated your Account </a> </p>
    //     `
    // }



   //emailNodeMailer(emaildate)
 
    // res.json({
    //     //message:`the complete user ${email} Registration process ,please try agin later `,
    //    token
    // })

//     res.status(204).json({
//       success: true,
//       message: "User registered successfully",
//       payload:{newUser}
//     });
//   } catch (error) {
//     next(error);
//   }
// };
const ProcessRegister = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const newUser = {
      name,
      email,
      password,
      phone,
      address
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      payload: newUser
    });

  } catch (error) {
    next(error);
  }
};


module.exports={createUser,getUserById,DeleteUserById,ProcessRegister}