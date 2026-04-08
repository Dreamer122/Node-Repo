const Todo=require("../Models/todo")
exports.addTodo=async(req,res)=>{
    try{
        const {title,description}=req.body;

        // if title or description is not provided then return error
        if(!title || !description){
            return res.status(400).json({
                success:false,
                message:"Please provide title and description"
            })
        }
        // create new todo
        const newTodo=await Todo.create({
          "title": title,
           "description": description,
        })
        console.log("new document",newTodo)

        return res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:newTodo
        })


    }
    catch(err){
        console.log("Error in creating todo",err)
        return res.status(500).json({
            success:false,
            message:"Internal server error",
            error:err
        })

    }
}