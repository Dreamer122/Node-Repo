const express=require("express")
const app=express()

require("dotenv").config()
const port=process.env.PORT||3000

// add middleware
app.use(express.json())

// it helps to read data from form and files
const fileupload=require("express-fileupload")
app.use(fileupload({
     useTempFiles : true,
    tempFileDir : '/tmp/'
}))

app.get("/",(req,res)=>{
    res.send(" welcome to our blog app")
})

// router
const routes=require("./Routes/routes")
app.use("/api/v1",routes)

// cponnect to db and cloudinary

const {connectDB}=require("./Config/database")
connectDB()
const {cloudinaryconnect}=require("./Config/cloudinary")
cloudinaryconnect()

app.listen(port,()=>{
    console.log("server is running on port number"+port)
})