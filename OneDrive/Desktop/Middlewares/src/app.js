const Auth=require("/middlewares/Authorisation")
const express=require("express")
const app=express()

app.use("/Admin",(req,res,next)=>{
    

    if (Auth){
        next()
    }
    else{
        res.send("Please check all the fields")
    }
    
})


app.use("/Admin/login",(reeq,res,next)=>{


    res.send("User login successfull")


})


app.listen(3006,(req,res)=>{

    console.log("Your server is running at port number 3006")
})