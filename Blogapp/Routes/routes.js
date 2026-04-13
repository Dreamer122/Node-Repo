const express=require('express');
const router=express.Router();
const {createPost}=require('../Controllers/Posts')
const {createComment}=require('../Controllers/Comment')
const {likePost}=require('../Controllers/Like')
router.post("/createPost",createPost)
router.post("/createComment",createComment)
router.post("/createLike",likePost)
module.exports=router