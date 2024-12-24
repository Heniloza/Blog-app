import express from 'express';
import USER from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

//Register
router.post("/register",async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new USER({username,email,password:hashedPassword})
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Login
router.post("/login",async(req,res)=>{
    try {
        const user = await USER.findOne({email:req.body.email})
        if(!user){
            return res.status(404).json("USER NOT FOUND");
        }
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
            return res.status(401).json("WRONG CREDENTIALS");
        }
        const token = jwt.sign({id:user._id},process.env.SECRET,{expiresIn:"3d"});
        const {password,...info} = user._doc;
        res.cookie("Token",token).status(200).json(info)
    } catch (error) {
        res.status(500).json("there is error in",error)
    }
})
//Logout
router.get("/logout",async(req,res)=>{
    try {
        res.clearCookie("Token",{sameSite:"none",secure:true}).status(200).json("User Logged Out Successfully");

    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;