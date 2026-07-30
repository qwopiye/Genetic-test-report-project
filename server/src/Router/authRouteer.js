const authRouter=require("express").Router()

const { handleLogin, handleLoginOut } = require("../Controller/authController");
const { isLoggedIn, isLoggedOut} = require("../Middleware/Auth");
const { validateUserLogin, validateDoctorLogin } = require("../validator/auth");
const { runValidator } = require("../validator/runvalidator")

authRouter.post("/login",validateDoctorLogin,runValidator, handleLogin)
authRouter.post("/logout", handleLoginOut)

module.exports=authRouter


