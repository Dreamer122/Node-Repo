const Post=require('../Models/Post')

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
