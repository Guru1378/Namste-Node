const express= require("express")
const app=express()
app.post("/Guru",(req,res)=>{
    res.send("Hello Brother i sent a parcel for you")
})
app.listen(6000,()=>{
    console.log("Your code running at port number 6000")
})