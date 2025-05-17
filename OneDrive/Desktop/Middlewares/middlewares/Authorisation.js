
const Auth =(req,res)=>{
    const {username,password}=req.body

    try{
        let username="Guru"
    let password="Guru@123"
    let Authorised=false
    if (req.body.username==username && req.body.password==password){
          Authorised=true
          res.send("Authorization is Successfull")
     
    }
    }
    catch(err){
        res.status(404).send("Error found")

    }

}

module.exports=Auth