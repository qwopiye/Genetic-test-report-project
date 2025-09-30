import express from 'express';
// import users from './user.js';
import user from './user.js'
const app=express();

const Port=process.env.PORT||3000;


app.get("/",(req,res)=>{
    res.send("this is Genetic");
})
app.get("/api/user",(req,res)=>{
    res.send(user);
    res.send("name")
})

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
})
