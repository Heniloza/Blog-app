import express from "express";
import USER from "../models/user.js";
import bcrypt from 'bcrypt';
import POST from '../models/post.js'
import COMMENT from '../models/comment.js'

const router = express.Router();

//CREATE
router.post("/create",async(req,res)=>{
    try {
        const newPost = new POST(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (error) {
        res.status(500).json(error);
    }
});

//UPDATE
router.put("/:id",async(req,res)=>{
    try {
        const updatedUser = await POST.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
});
//DELETE
router.delete("/:id",async(req,res)=>{
    try {
       await POST.findByIdAndDelete(req.params.id);
       res.status(200).json("POST HAS BEEN DELTED");
    } catch (error) {
        res.status(500).json(error)
    }
});
//GET POST DETAILS
router.get("/:id",async(req,res)=>{
    try {
       const post = await POST.findById(req.params.id);
       res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error)
    }
});
//GET POSTS
router.get("/",async(req,res)=>{
    const query = req.query;
    try {
        const searchFilter = {
            title:{$regex:query.search,$options:"i"}
        }
       const allPosts = await POST.find(query.search?searchFilter:null);
       res.status(200).json(allPosts);
    } catch (error) {
        res.status(500).json(error)
    }
});
//GET USERS POSTS
router.get("/user/:userId",async(req,res)=>{
    try {
       const usersAllPosts = await POST.find({userId:req.params.userId});
       res.status(200).json(usersAllPosts);
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;