const tours=require('../model/tour package');
const booking=require('../model/booking');
const getAlltours=async(req,res)=>{
    const loc=req.query.location;
    const type=req.query.tourType;
    const obj={};
    if(loc){
        obj.location=loc;
    }
    if(type){
        obj.tourType=type
    }
    console.log(obj);
    const tour=await tours.find(obj);
    console.log(tour);
    res.json(tour);
}
const bookTour=async(req,res)=>{
    const data={}
    data.status="booked"
    data.bookingDate = new Date()
    const book = new booking(data)
    await book.save();
    res.json(book)
}
const cancelbooking=async(req,res)=>{
    const id=req.params.id
    console.log(id)
    const book = await booking.findById(id)
    if(!book) return res.json({status:"booking not found"})
    
    book.status="cancelled"
    await book.save();
    res.json({status:"booking cancelled successfully"})
}
module.exports={getAlltours,bookTour,cancelbooking}