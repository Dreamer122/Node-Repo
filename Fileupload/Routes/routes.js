const express=require('express');
const router=express.Router();
const {uploadImage}=require("../Controllers/Fileupload")
router.post("/uploadimage",uploadImage)
module.exports=router;