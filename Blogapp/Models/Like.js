const mongoose=require("mongoose")

const likeSchema=mongoose.Schema({
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"POST"
    },
    username:{
        type:String,   
        required:true
    }
})
module.exports=mongoose.model("LIKE",likeSchema)
    