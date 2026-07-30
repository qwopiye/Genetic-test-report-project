const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const Doctor = require("../Models/doctorModel");
const { creatwebToken } = require("../helper/jsonwedToken");
const { jwtAcessKye } = require("../sceret");

const handleLogin = async (req, res) => {
  try {
    const { id, password } = req.body;

    // validation
    if (!id || !password) {
      return res.status(400).json({
        success: false,
        message: "id and password are required",
      });
    }

   
     const doctor = await Doctor.findOne({ id: Number(id) });
     if (!doctor) {
       return res.status(404).json({
         success: false,
         message: "Doctor does not exist",
       });
     }



const passwordMatch = await bcrypt.compare(password, doctor.password);
if (!passwordMatch) {
      return res.status(401).json({
         success: false,
         message: "id or password did not match",
       });
      }

    // password check
    // const passwordMatch = await bcrypt.compare(password, doctor.password);
    // if (!passwordMatch) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "id or password did not match",
    //   });
    // }
    
   const doctorWithoutPassword=await Doctor.findOne({ id }).select('-password');
    // create token
    const accessToken = creatwebToken(
      { id:doctor.id },
      jwtAcessKye,
      "10m"
    );

   
    res.cookie("access_token", accessToken, {
      httpOnly: true,
      maxAge: 1 * 60 * 1000,
      sameSite: "lax",
      secure: false,
    });

  
    return res.status(200).json({
      success: true,
      message: "Doctor logged in successfully",
      doctorWithoutPassword
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const handleLoginOut = async (req, res, next) => {
    try {

    
        res.clearCookie('access_token');

        res.status(202).json({
            message: "Doctor logged out successfully",
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { handleLogin, handleLoginOut };
