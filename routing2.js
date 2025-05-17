const Auth=require("./Middlewares/Authorisation")
const express=require("express")
const app=express()
app.use("/Guru",Auth)

app.use("/Guru/login",(req,res)=>{
    try{
        res.send("login successful")
    }
    catch(err){
        res.status(501).send("Server side error")
    }
    
})

app.listen(3000,()=>{
    console.log("Your server running at port number 3000")
})