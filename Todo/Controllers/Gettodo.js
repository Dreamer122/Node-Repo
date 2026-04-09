const Todo=require("../Models/todo")

exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find()
        res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            todos
        })

    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Failed to fetch todo",
            error:err.message
        })
    }
}