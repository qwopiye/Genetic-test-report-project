const express = require("express");
require("dotenv").config()
const app = express();
const morgan=require("morgan");

const userRouter=require('./Route/user.route')
const user=require('./Module/user.model')


const cors=require("cors")
const bodyParser=require("body-parser")



app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(morgan("dev"))



app.get("/api/user",(req,res)=>{
    res.status(200).json(user)
})


app.use((req,res,next)=>{
    res.status(400).json({
        mesage:"this is Wrong side"
    })
})

app.use((req,res,next)=>{
    res.status(500).json({
        mesage:"something Error"
    })
})
module.exports= app