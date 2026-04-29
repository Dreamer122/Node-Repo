const SignUp=require("../Models/SignUp")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
exports.signUp=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        // Check if user already exists
        const existingUser=await SignUp.findOne({email:email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User with this email already exists"
            })
        }
        // password hashing
     const hashedpassword=  await bcrypt.hash(password, 10);
     console.log("hashedpassword",hashedpassword)

    //  create user
        
        const user=await SignUp.create({
            name,email,password:hashedpassword,role
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal server error"+error
        })
    }
}

exports.login=async(req,res)=>{
    try{
        console.log("req.body",req.body)
        const {email,password}=req.body

        // check if user exists
        const user=await SignUp.findOne({email:email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid email"
            })
        }
        // compare password
        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid password"
            })
        }
        console.log("user",user)
// generate token
// payload
const payload={
    id:user._id,
    email:user.email,
    role:user.role
}
const token =jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });

const options={
    expires: new Date(Date.now() +2*24*60*60*1000),
    // expires: new Date(Date.now() +5000),
    httpOnly:true,
 }
 user.password=undefined


       return res.cookie("token",token,options).status(200).json({
            success:true,
            message:"Login successful",
            user,token
        })


    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal server error"+error
        })
    }
}