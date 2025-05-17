const Auth=(req,res,next)=>{
    try{
        const token="Guru@13"
    let Authorised=false
    if(token==="Guru@123"){
        Authorised=true
    }
    else{
        console.log("Sorry Your not authorised")
    }
    if (Authorised){
        next()
    }
    else{
        res.status(401).send("Client side error")
    }
}
catch(err){
    res.status(401).send("Your not allowed")
}
    
}
module.exports=Auth