import express from 'express';
import users from './user.js';
const app=express();

const Port=process.env.PORT||3000;

app.get("/api/user",(req,res)=>{
    res.send(users);
})
app.get("/",(req,res)=>{
    res.send("this is Genetic");
})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
})