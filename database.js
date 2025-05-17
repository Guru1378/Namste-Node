const mongoose=require("mongoose")
const connectDB=async()=>{
        await mongoose.connect("mongodb+srv://Guru123:Guru123@tesing.agdnplc.mongodb.net/?retryWrites=true&w=majority&appName=Tesing")
   
}

module.exports=connectDB

