import express from 'express';
import USER from '../models/user.js';
import bcryp from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

//Register
router.post("/register",async(req,res)=>{
    try {
        const {username,email,password} = req.body;
        const newUser = new USER({username,email,password})
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(err)
    }
});

//Login


//Logout



export default router;