const express = require("express");

const app=express()

app.use("/guru",(req,res)=>{
    res.send("Hello Guru Prasad")
})

app.listen(3001,()=>{
    console.log("Your server running at port number 3001")
})