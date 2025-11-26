

const userRouter=require("express").Router()

const {
    createUser, 
    DeleteUserById, 
    getUserById, 
    ProcessRegister} = require("../Controller/userController")
const { runValidator } = require("../validator/runvalidator")
const { validateUserRegistration } = require("../validator/auth")





userRouter.post("/register",validateUserRegistration,runValidator,ProcessRegister)
userRouter.get("/",createUser)
userRouter.get("/:id", getUserById)
userRouter.delete("/:id", DeleteUserById)

module.exports=userRouter;


