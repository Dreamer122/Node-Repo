const mongoose=require("mongoose")
require("dotenv").config()
exports.connectDB=async()=>{
    mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((err)=>{
        console.log("Error in connecting to MongoDB",err)
    })
}