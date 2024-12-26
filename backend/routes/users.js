import express from "express";
import USER from "../models/user.js";
import bcrypt from 'bcrypt';
import POST from '../models/post.js'
import COMMENT from '../models/comment.js'
import verifyToken from "../verifyToken.js";

const router = express.Router();


//UPDATE
router.put("/:id",verifyToken,async(req,res)=>{
    try {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hashSync(req.body.password,salt);
        }
        const updatedUser = await USER.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
});
//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    try {
       await USER.findByIdAndDelete(req.params.id);
       await POST.deleteMany({userId:req.params.id});
       await COMMENT.deleteMany({userId:req.params.id});
       res.status(200).json("USER HAS BEEN DELTED")
    } catch (error) {
        res.status(500).json(error)
    }
});
//GET USER
router.get("/:id",async(req,res)=>{
    try {
       const user = await USER.findById(req.params.id);
       const {password,...info} = user._doc;
       res.status(200).json(info)
    } catch (error) {
        res.status(500).json(error)
    }
});

export default router;