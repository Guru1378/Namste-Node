const express=require("express")
const app=express()
app.get("/Guruprasad",(req,res)=>{

    res.send("Hello Guru Prasad Ela unnav")
})
app.listen(4000,()=>{
    console.log("Your code running at 4000")
})