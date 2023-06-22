
const express=require("express");

const app=express()
app.get("/user",(req,res)=>res.send("welcome"));

app.listen(1996,(err)=>err?console.log(err): console.log("server is run"))