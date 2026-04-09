const express=require("express")
const router=express.Router()
const {addTodo}=require("../Controllers/Addtodo")
const {getTodo}=require("../Controllers/Gettodo")
const {updateTodo}=require("../Controllers/UpdateTodo")
const {deleteTodo}=require("../Controllers/Deletetodo")
router.post("/addtodo",addTodo);
router.get("/gettodo",getTodo); 
router.put("/updatetodo",updateTodo);
router.delete("/deletetodo/:id",deleteTodo);
module.exports=router;
