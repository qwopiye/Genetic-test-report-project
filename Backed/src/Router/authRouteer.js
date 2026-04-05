const authRouter=require("express").Router()

const { handleLogin, handleLoginOut } = require("../Controller/authController");
const { isLoggedIn, isLoggedOut} = require("../Middleware/Auth");
const { validateUserLogin } = require("../validator/auth");
const { runValidator } = require("../validator/runvalidator")

authRouter.post("/login",validateUserLogin,runValidator, handleLogin)
 authRouter.post("/logout", handleLoginOut)

module.exports=authRouter


