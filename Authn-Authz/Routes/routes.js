const express=require("express");
const router=express.Router()
const {signUp,login}=require("../Controller/SignUp")
const {auth,isStudent,isAdmin}=require("../Controller/Middleware")
router.post("/signup",signUp)
router.post("/login",login)
router.get("/student",auth,isStudent,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome student"
    })
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcome Admin"
    })
})
module.exports=router