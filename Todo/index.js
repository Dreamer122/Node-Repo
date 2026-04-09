const express=require("express")
const app=express()
const todoroutes=require("./Routes/todoRoutes")
const {connectDB}=require("./Config/database")
const cors = require('cors')

// to read json data from request body
app.use(express.json())
const port=4000
app.use(cors({
    origin:"*"
})) // Enable CORS for all routes
app.use("/api/v1",todoroutes)
connectDB()

app.get('/',(req,res)=>{
    res.send("hello world")
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})