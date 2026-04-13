const Comment=require("../Models/Comment")
const Post=require("../Models/Post")
exports.createComment=async(req,res)=>{
    try{
        const {postId,username,body}=req.body
        if(!postId || !username || !body){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }   
        const newComment=await Comment.create({postId,username,body})
        // send it in post model comment array
        const updatedpost= await Post.findByIdAndUpdate(postId,{$push:{comments:newComment._id}},{returnDocument:'after'})
        res.status(201).json({
            success:true,
            message:"comment created successfully",
            data:newComment,
            updatedpost
        })  
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while creating comment",
            error:error.message
        })
    }
}