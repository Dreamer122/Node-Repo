const Todo=require("../Models/todo")

exports.updateTodo=async(req,res)=>{
    try{
        // get id and updated data
        const {id,title,description}=req.body
        const updatedtodo=await Todo.findByIdAndUpdate(id,{title,description},{new:true})
        res.status(200).json({
            success:true,
            message:"Todo updated successfully",
            updatedtodo
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to update todo",
            error:error.message
        })
    }
}
    
