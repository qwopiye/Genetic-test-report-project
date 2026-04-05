const createHttpError = require('http-errors')
const User=require('../Models/userModel')
const doctor = require('../Models/doctorModel')

const paitentID= async(search,limit,page)=>{
    
   try {
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
    if(!users) throw createHttpError(404,"user not Found");
   
       return{
        message:" this is home page created by Sohan ",
       users,
       pagination : {
        totalPage : Math.ceil(count / limit),
        currentPage: page,
        prevePage: page-1 > 0 ? page-1 : null,
        nextPage: page+1 <=  Math.ceil(count/ limit) ? page+1: null 

       }

       }
    
   } catch (error) {
     throw(error)
   }
}

const doctorID= async(search,limit,page)=>{
    
   try {
     const searchRegExp= new RegExp(".*" + search + ".*", 'i')

    const filtter={
        isAdmin: {$ne: true},
        $or:[
            {name:{$regex : searchRegExp}},
            ...(isNaN(search) ? [] : [{ id: Number(search) }])
         
        ],
    }
    
    const options={password: 0}

    const doctors= await doctor.find(filtter,options)
    .limit(limit)
    .skip((page-1) * limit);

    const count=await doctor.find(filtter).countDocuments();
    if(!doctors) throw createHttpError(404,"Doctor not Found");
   
       return{
        message:" the doctor returned  ",
       doctors,
       pagination : {
        totalPage : Math.ceil(count / limit),
        currentPage: page,
        prevePage: page-1 > 0 ? page-1 : null,
        nextPage: page+1 <=  Math.ceil(count/ limit) ? page+1: null 

       }

       }
    
   } catch (error) {
     throw(error)
   }
} 

const findWithID = async (id, options = {}) => {
  try {
    
    const patients=await User.findById(User,id,options)
    if(!patients){ throw createHttpError(404,"the paitent not found")}
    return patients

   
  } catch (error) {
    throw error;
  }
};



module.exports={paitentID,doctorID,findWithID}