const admin=require('../model/tour package')


const adminentry= async (req,res)=>{
    const data=req.body
    const newTours=new admin(data)
    await newTours.save()
        res.json(newTours);  
}
const admindel= async(req,res)=>{
    const entry=await admin.findByIdAndDelete(req.params.id)
    res.json(entry)
}
const adminupdate= async (req,res)=>{
    const data=req.body
    const entry=await admin.findByIdAndUpdate(req.params.id,data)
    res.json([entry,"data updated"])
}
module.exports={adminentry,admindel,adminupdate}