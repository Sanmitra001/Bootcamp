const model=require('../model/user model')
const userRegister= async (req,res)=>{
    const data=req.body
    if(await model.findOne({email:data.email})){
         res.json({status:"user already exists"});
    }else{
        await model.create(data)
         res.json({status:"new user profile created"})
    }
}
const userLogin= async(req,res)=>{
    const body=req.body
    const entry=await model.findOne({email:body.email})
    console.log(entry)
    if(!entry){
        return res.json({status:"incorrect userid"})
    }
    else if(entry.password!==body.password){
       return res.json({status:"login not successful"})
    }
    else{
       return  res.json({status:"login successful"})
    }
}
const User=async (req,res)=>{
    const user=await model.find()
    res.json(user)
}
module.exports=userRegister
module.exports=userLogin
module.exports=User