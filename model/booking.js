const mongoose = require("mongoose")
const booking=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    tourpackageId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TourPackage"
    },
    status:{
        type:String,
        enum: ["booked","cancelled"],
        required:true
    },
    bookingDate:{
        type:Date,
        required:true
    }

},{timestamps: true});

const Booking= mongoose.model("Booking",booking);
module.exports=Booking