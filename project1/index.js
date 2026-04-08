// step 1 import express
const express=require("express")
const app=express()
// port number
const port =3000
//  api methods -> post , get , put , delete
app.get('/hello',(req,res)=>{
    res.send("welcome to express js")
})
app.get("/about",(req,res)=>{
    res.send("this is about page my second route")
})
// step 3 listen to the port
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
// nodemon