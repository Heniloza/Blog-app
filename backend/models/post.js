import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
    }
},{timestamps:true})

const POST = mongoose.model("post",postSchema);

export default POST