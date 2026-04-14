const Post=require('../Models/Post')
const Comment=require('../Models/Comment')
const Like=require('../Models/Like')

exports.createPost=async(req,res)=>{

    try{
        const {title,description,category}=req.body
        if(!title || !description || !category){
            return res.status(400).json({
                success:false,
                message:"all fields are required"
            })
        }
        const newpost=await Post.create({title,description,category})
        res.status(201).json({
            success:true,
            message:"post created successfully",
            data:newpost
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while creating post",
            error:error.message
        })
    }
}

// get all post
exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments")
        res.status(200).json({
            success:true,
            data:posts,
            message:"all posts fetched successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while fetching posts",
            error:error.message
        })
    }
}
// delete post
exports.deletePost=async(req,res)=>{
    try{

    const {postId}=req.params
// delete comment associated with post
        await Comment.deleteMany({postId:postId})
// delete likes associated with post
        await Like.deleteMany({postId:postId})

        const post=await Post.findByIdAndDelete(postId)
        if(!post){
            return res.status(404).json({
                success:false,
                message:"post not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"post deleted successfully"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while deleting post",
            error:error.message
        })
    }
}
// update post
exports.updatePost=async(req,res)=>{
    try{
        const {postId,title,description,category}=req.body
            const updatedpost=await Post.findByIdAndUpdate(postId,{title,description,category},{new:true})
            return res.status(200).json({
                success:true,
                message:"post updated successfully",
                data:updatedpost
            })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occured while updating post",
            error:error.message
        })
    }
}