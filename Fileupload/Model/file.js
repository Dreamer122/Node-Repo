const mongoose=require("mongoose")
const {Sendmail}=require("../Config/Email")
const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,   
        required:true
    },
    file:{
        type:String,
        required:true
    }
})


// poset middleware for email
fileSchema.post("save",function(doc){
    console.log("Document saved with email",doc.email)
    Sendmail(doc.email,"file upload",`Your file has been uploaded successfully. File URL: ${doc.file}`)

})
const fileModel=mongoose.model("file",fileSchema)
module.exports=fileModel