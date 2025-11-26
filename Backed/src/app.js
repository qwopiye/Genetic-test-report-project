const express=require("express")

const morgan=require("morgan")
const createError= require('http-errors')
const latelimit=require('express-rate-limit')
const bodyParser=require("body-parser")



const userRouter=require('./Router/userRoute')
const seedRouter = require("./Router/seedRouter")
const errorResponse=require('./Controller/ResponseController')




const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const limitlates=latelimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message:'too many the Request please try agin later'
})

app.use(limitlates)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/datas", (req, res) => {
    res.send("this is data");
});

// Users route
app.get("/users", (req, res) => {
    res.json([{ name: "Sohan", email: "sohan@example.com" }]);
});

 app.use("/api/user",userRouter)

 app.use("/api/seed",seedRouter)



app.use((req,res,next)=>{
   createError(404,"route not fount")
    next()
})
app.use((err,req,res,next)=>{
//    return res.status(err.status || 500).json({
//     sucess: false,
//     message:err.message

//    });
   return errorResponse(res,{
    statuCode:err.status,
    message:err.message
   });
   
});

module.exports=app