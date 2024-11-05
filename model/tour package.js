const mongoose=require("mongoose");
 const itineraryschema=new mongoose.Schema({
    day:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
 })
 const tourpackage=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    tourType:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    itinerary:{
        type:[itineraryschema],
        required:true
    }
 },{timestamps: true});
 
const TourPackage = mongoose.model("TourPackage", tourpackage);

module.exports= TourPackage