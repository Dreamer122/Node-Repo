const Todo=require("../Models/todo")

exports.deleteTodo=async(req,res)=>{
    try{
        // get id
        // const {id}=req.body
        const {id}=req.params
        const deletedtodo=await Todo.findByIdAndDelete(id)
            res.status(200).json({
                success:true,
                message:"Todo deleted successfully",
                deletedtodo
            })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to delete todo",
            error:error.message
        })
    }
}