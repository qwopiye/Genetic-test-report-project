const createError = require("http-errors");
const bcrypt = require("bcryptjs");
const User = require("../Models/userModel");
const { creatwebToken } = require("../helper/jsonwedToken");
const { jwtAcessKye } = require("../sceret");

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    // password check
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Email or password did not match",
      });
    }
   const userWithoutPassword=await User.findOne({ email }).select('-password');
    // create token
    const accessToken = creatwebToken(
      { email:user.email },
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
      message: "User logged in successfully",
      userWithoutPassword
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
            message: "User logged out successfully",
        });

    } catch (error) {
        next(error);
    }
};

module.exports = { handleLogin, handleLoginOut };
