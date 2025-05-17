const connectDB=require("./database")
const express=require("express")
const app=express()
app.listen(3000,()=>{
    connectDB().then(()=>{
        console.log("Port is running on 3000")
    }).catch((err)=>{
        console.log("Some error encoutered ",err)
    })
})