import express from "express";
import COMMENT from "../models/comment.js";
import verifyToken from "../verifyToken.js";

const router = express.Router();

//CREATE
router.post("/create",verifyToken,async(req,res)=>{
    try {
        const newComment = new COMMENT(req.body);
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE
router.put("/:id",verifyToken,async(req,res)=>{
    try {
        const updatedComment = await COMMENT.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(500).json(error)
    }
});
//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    try {
       await COMMENT.findByIdAndDelete(req.params.id);
       res.status(200).json("COMMENT HAS BEEN DELTED");
    } catch (error) {
        res.status(500).json(error)
    }
});
//GET POST COMMENTS
router.get("/post/:postId",async(req,res)=>{
    try {
       const allComments = await COMMENT.find({postId:req.params.postId});
       res.status(200).json(allComments);
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;