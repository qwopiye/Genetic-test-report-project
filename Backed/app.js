const express = require("express");
require("dotenv").config()
require('./Config/db')
const app = express();
const morgan=require("morgan");

const userRouter=require('./Route/user.route')
const user=require('./Module/user.model')


const cors=require("cors")
const bodyParser=require("body-parser");



//use medilware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("dev"))



// app.get("/api/user",(req,res)=>{
//     res.status(200).json(user)
// })
// app.post("/api/user",(req,res)=>{
//     res.status(201).json({user})
// })
app.use("/api/user",userRouter)

//User Error
app.use((req,res,next)=>{
    res.status(400).json({
        mesage:"this is Wrong side"
    })
})

//Server Error
app.use((arr,req,res,next)=>{
    res.status(500).json({
        mesage:"something Error"
    })
})
module.exports= app