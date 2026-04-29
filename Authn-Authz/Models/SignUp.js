const mongoose=require("mongoose")
const signUpSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["Student","Admin"],
        default:"Student"
    }
})

module.exports=mongoose.model("SignUp",signUpSchema)