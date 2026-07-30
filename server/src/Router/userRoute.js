

const userRouter=require("express").Router()
const { createPatient, 
    getPatienrById, 
    DeletePaitentById, 
    patientRegister, 
    updataPaitentById} = require("../Controller/patientController")

const { runValidator } = require("../validator/runvalidator")
const { validateUserRegistration } = require("../validator/auth")
const { isLoggedIn } = require("../Middleware/Auth")

userRouter.post("/register",validateUserRegistration,runValidator,patientRegister)
userRouter.get("/", isLoggedIn,createPatient)
userRouter.get("/:id",isLoggedIn, getPatienrById)
userRouter.delete("/:id",isLoggedIn, DeletePaitentById)
userRouter.put("/:id",isLoggedIn,updataPaitentById)

module.exports=userRouter;


