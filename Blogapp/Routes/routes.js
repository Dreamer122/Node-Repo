const express=require('express');
const router=express.Router();
const {createPost,getAllPosts,deletePost,updatePost}=require('../Controllers/Posts')
const {createComment,deleteComment}=require('../Controllers/Comment')
const {likePost,dislikePost}=require('../Controllers/Like')
router.post("/createPost",createPost)
router.post("/createComment",createComment)
router.post("/createLike",likePost)
router.get("/getAllPosts",getAllPosts)
router.delete("/deletePost/:postId",deletePost)
router.put("/updatePost",updatePost)
router.delete("/deleteComment",deleteComment)
router.delete("/dislikePost",dislikePost)
module.exports=router