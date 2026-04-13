const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"LIKE"
    }],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,    
            ref:"COMMENT"
        }
    ]
})
module.exports=mongoose.model("POST",postSchema)
