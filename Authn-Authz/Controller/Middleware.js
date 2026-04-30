// check loginn or not 
//  check student or admin
const jwt=require("jsonwebtoken")
exports.auth=async(req,res,next)=>{
    try{
        // console.log("req.cookies",req)
        const token=req.cookies.token
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Unauthorized token not foundd"
            })
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user=decoded
        next()
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Unauthorized invalid token"+error
        })
    }
}
exports.isStudent=async(req,res,next)=>{
    try{
        if(req.user.role!=="Student"){
            return res.status(403).json({
                success:false,
                message:"you are not a student"
            })

        }
        next()
    }
    catch(error){
        return res.status(403).json({
            success:false,
            message:"error occured while checking student role"+error
        })
    }
}

exports.isAdmin=async(req,res,next)=>{
    try{
        if(req.user.role!=="Admin"){
            return res.status(403).json({
                success:false,
                message:"you are not a Admin"
            })

        }
        next()
    }
    catch(error){
        return res.status(403).json({
            success:false,
            message:"error occured while checking Admin role"+error
        })
    }
}
