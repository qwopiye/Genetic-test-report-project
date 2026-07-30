const doctorRouter=require("express").Router()

const { 
    doctorRegister, 
    createDoctor, 
    getDoctorById,
    DeleteDoctortById, 
    updateDoctorById } = require("../Controller/doctorController")

const { runValidator } = require("../validator/runvalidator")
const { isLoggedIn } = require("../Middleware/Auth")
const { validateDoctorRegistration } = require("../validator/DoctorAuth")
const { DoctorProfile } = require("../Controller/DoctorProfile")
const { creatwebToken } = require("../helper/jsonwedToken")


doctorRouter.post("/register",
    
    validateDoctorRegistration,
    runValidator, 
    doctorRegister)
doctorRouter.get("/my-profile",creatwebToken,DoctorProfile)
doctorRouter.get("/", isLoggedIn,createDoctor)
doctorRouter.get("/:id",isLoggedIn, getDoctorById)
doctorRouter.put("/:id",isLoggedIn, updateDoctorById)
doctorRouter.delete("/:id",isLoggedIn, DeleteDoctortById)


module.exports=doctorRouter;


