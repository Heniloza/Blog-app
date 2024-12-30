import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors'
import multer from "multer"
//cookie parser
import cookieParser from 'cookie-parser';
//ROUTES
import authRouter from './routes/auth.js'
import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import commentRouter from './routes/comments.js'

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())

//Routes
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/comments",commentRouter);

//Image Upload
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"images");
  },
  filename:(req,file,cb)=>{
    cb(null,"image1.jpg");
  }
})

const upload = multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  res.status(200).json("Image has been uploaded successfully.");
})

//database connection
(function mongoDb(){
  mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("CONNECTED TO MOBGODB"))
.catch((err)=> console.log("ERROR IN CONNECTING TO DATABASE",err)
)})()

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT ${process.env.PORT} PORT`);
});
