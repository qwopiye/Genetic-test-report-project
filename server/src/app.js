const express=require("express")

const morgan=require("morgan")
const createError= require('http-errors')
const latelimit=require('express-rate-limit')
const bodyParser=require("body-parser")
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter=require('./Router/userRoute')
const seedRouter = require("./Router/seedRouter")
const errorResponse=require('./Controller/ResponseController')
const authRouter = require("./Router/authRouteer")
const doctorRouter = require("./Router/doctorRouter")
const predictrouter = require("./Router/predictionRoutes")
const profileRoutes = require('./Router/profileRoutes');


const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


const limitlates=latelimit({
    windowMs: 1 * 60 * 1000,
    max: 50,
    message:'too many the Request please try agin later'
})
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(limitlates)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



// app.use("/genetic/patient",userRouter)
app.use("/genetic/doctor/auth",authRouter)  
app.use("/genetic/doctor",doctorRouter)
app.use("/genetic/report",predictrouter)
app.use('/genetic/doctor/profile/', profileRoutes);


//  app.use("/api/seed",seedRouter)



app.use((req,res,next)=>{
   createError(404,"route not fount")
    next()
})
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


module.exports=app