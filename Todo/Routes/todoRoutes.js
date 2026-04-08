const express=require("express")
const router=express.Router()
const {addTodo}=require("../Controllers/Addtodo")
router.post("/addtodo",addTodo);
module.exports=router;