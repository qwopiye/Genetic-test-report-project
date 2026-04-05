const createError= require('http-errors')

const doctor = require("../Models/doctorModel");
const  sucessResponse  = require('./ResponseController');
const  mongoose  = require('mongoose');
const findWithId = require('../serves/findWithId');
const { options } = require('../app');
const { doctorID } = require('../serves/patientServes');

const createDoctor= async(req,res,next)=>{
    try {
    const search=req.query.search||"";
    const page=Number(req.query.page) || 1;
    const limit=Number(req.query.limit)|| 2;

    const {doctors,pagination}= await doctorID(search,limit,page)
    res.status(200).json({
       message:" this is home page created by Sohan ",
       doctors,
       pagination : {
        pagination
       }
       
     
    });
     
    } catch (error) {
        next(error)
        
    }
}


const getDoctorById=async(req,res,next)=>{
    try {
        const id=req.params.id;
       const doctorId=await findWithId(doctor,id,options);
       if(!doctorId){ throw createError(404,"the doctor is not found")}
       
        res.status(200).json({
        success:true,
        message:"the doctor return found",
        doctorId,
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid Doctor id"))
            return
         }
        next(error)
        
    }
};
const DeleteDoctortById=async(req,res,next)=>{
    try {
       const id=req.params.id;
       const doctors=await findWithId(doctor,id,options);
       if(!doctors){ throw createError(404,"the Doctor is not found")}

         await doctor.findByIdAndDelete(id);
       
        res.status(200).json({
        message:"the Doctor delete sucessfully",
      
      
     })

        
    } catch (error) {
        if(error instanceof mongoose.Error)
         {
            next( createError(404,"the Invalid doctor id"))
            return
         }
        next(error)
        
    }
};


const doctorRegister = async (req, res, next) => {
  try {

    const {name,id,password}=req.body;
    const newDoctor=await doctor.create({
        name,
        id,
        password
    });
    
    res.status(201).json({
      success: true,
      message: "doctor registered successfully",
      newDoctor
  
      
    });

  } catch (error) {
    next(error);
  }
};
const updateDoctorById=async(req,res,next)=>{
    try {
       const id=req.params.id;
       const updateOptions = { new: true, runValidators: true, context: 'query' };
    const updates = {};

    for (let key in req.body) {
      if (["name"].includes(key)) {
        updates[key] = req.body[key];
      }
      else if (["id"].includes(key)) {
        throw createError(404,"id Cannot be Updated")
      }
    }

    const updateDoctor = await doctor.findByIdAndUpdate(id, updates, updateOptions);

    if (!updateDoctor) {
      throw createError(404, "Invalid Doctor");
    }

      
        res.status(200).json({
        message:"the Doctor update sucessfully",
        updateDoctor
      
      
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

module.exports={createDoctor,getDoctorById,DeleteDoctortById,doctorRegister,updateDoctorById}