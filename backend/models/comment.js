import mongoose, { mongo } from "mongoose";

const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    }
},{timestamps:true})

const COMMENT = mongoose.model("comment",commentSchema);

export default COMMENT