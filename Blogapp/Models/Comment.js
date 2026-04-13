const mongoose=require("mongoose")
const commentSchema=mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"POST"
    },
    username:{
        type:String,    
        required:true
    },
    body:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("COMMENT",commentSchema)
    