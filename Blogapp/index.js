const express=require('express');
const app=express()
const {connectDB}=require('./Config/database')
const routes=require('./Routes/routes')
require("dotenv").config()
// port number for server
const port=process.env.PORT || 4000
// to parse json data
app.use(express.json())

app.use("/blogapi",routes)
// connect to database
connectDB()
// start the server
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
