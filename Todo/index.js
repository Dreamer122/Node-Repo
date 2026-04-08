const express=require("express")
const app=express()
const todoroutes=require("./Routes/todoRoutes")
const {connectDB}=require("./Config/database")

// to read json data from request body
app.use(express.json())
const port=4000
app.use("/api/v1",todoroutes)
connectDB()

app.get('/',(req,res)=>{
    res.send("hello world")
})


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})