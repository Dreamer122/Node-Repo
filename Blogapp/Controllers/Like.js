const Like=require("../Models/Like")
const Post=require("../Models/Post")
exports.likePost=async(req,res)=>{
    try{
        const {postId,username}=req.body
        if(!postId || !username){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        const newLike=await Like.create({postId,username})

        // send it in post model like array
     const updatedpost= await Post.findByIdAndUpdate(postId,{$push:{like:newLike._id}},{new:true})



        res.status(201).json({
            success:true,
            message:"post liked successfully",
            data:newLike,
            updatedpost
        })  

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while liking post",
            error:error.message
        })

    }
}