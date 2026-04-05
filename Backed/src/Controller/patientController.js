const createError= require('http-errors')

const User = require('../Models/userModel');

const  sucessResponse  = require('./ResponseController');
const  mongoose  = require('mongoose');
const findWithId = require('../serves/findWithId');
const { options } = require('../app');

const {  jwtActivatedToken, clienturl } = require('../sceret');
const { creatwebToken } = require('../helper/jsonwedToken');
const { paitentID } = require('../serves/patientServes');
//const creatwebToken = require('../serves/jsonwebtoken');
//const emailNodeMailer = require('../helper/email');

const createPatient= async(req,res,next)=>{
    try {
    const search=req.query.search||"";
    const page=Number(req.query.page) || 1;
    const limit=Number(req.query.limit)|| 2;

      const {users,pagination}= await paitentID(search,limit,page)
    res.status(200).json({
       message:" this is home page created by Sohan ",
       users,
       pagination : {
        pagination
       }
       
     
    });
     
    } catch (error) {
        next(error)
        
    }
}


const getPatienrById=async(req,res,next)=>{
    try {
        const id=req.params.id;
       const patientId=await findWithId(User,id,options);
       if(!patientId){ throw createError(404,"the patient is not found")}
       
        res.status(200).json({
        success:true,
        message:"the patient return found",
        patientId,
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid patient id"))
            return
         }
        next(error)
        
    }
};
const DeletePaitentById=async(req,res,next)=>{
    try {
       const id=req.params.id;
       const user=await findWithId(User,id,options);
       if(!user){ throw createError(404,"the patient is not found")}

         await User.findByIdAndDelete(id);
       
        res.status(200).json({
        message:"the patient delete sucessfully",
      
      
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid patient id"))
            return
         }
        next(error)
        
    }
};


const patientRegister = async (req, res, next) => {
  try {
    const { name, email, password, phone, address } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: "Patient already exists"
      });
    }

     const newPatient = await User.create({
       name,
       email,
       password,
       phone,
       address
     });
    //const token=creatwebToken({name,email,password,phone,address},jwtActivatedToken,'10m')

    res.status(201).json({
      success: true,
      message: "Patientf registered successfully",
      newPatient
      
    });

  } catch (error) {
    next(error);
  }
};

const updataPaitentById=async(req,res,next)=>{
    try {
       const id=req.params.id;
       const updateOptions = { new: true, runValidators: true, context: 'query' };
    const updates = {};

    for (let key in req.body) {
      if (["name", "password", "phone", "address"].includes(key)) {
        updates[key] = req.body[key];
      }
      else if (["email"].includes(key)) {
        throw createError(404,"Email Cannot be Updated")
      }
    }

    const updatePatient = await User.findByIdAndUpdate(id, updates, updateOptions);

    if (!updatePatient) {
      throw createError(404, "Invalid User");
    }

      
        res.status(200).json({
        message:"the paitent update sucessfully",
        updatePatient
      
      
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

module.exports={createPatient,getPatienrById,DeletePaitentById,patientRegister,updataPaitentById}