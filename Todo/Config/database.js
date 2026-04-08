const mongoose=require("mongoose")
exports.connectDB=async()=>{
    mongoose.connect("mongodb://localhost:27017/batch1pmtodo").then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log("Error in connecting to MongoDB",err)
    })
}