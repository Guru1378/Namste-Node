const express=require("express")
const app=express()
app.use("/helloGuru",(req,res)=>{
    
    res.send({"name":"Guru"})
})
const port=3000
app.listen(port,()=>{
    console.log(`your server runniung at ${port}`)
})