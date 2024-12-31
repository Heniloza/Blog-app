import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from "multer";
import { fileURLToPath } from 'url';
import path from 'path';
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
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser())

//Routes
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/posts",postRouter);
app.use("/api/comments",commentRouter);

const storage = multer.diskStorage({
  destination: function (req, file, cb) { 
      return cb(null,"./images")//cb is callback function which is takes two parameter. first is error and second is path
  },
  filename: function (req, file, cb) {
      return cb(null,req.body.img);
      // return cb(null,"image1.jpg");
  },  
})
const upload = multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
  const fileUrl = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;
  res.status(200).json({ message: "Image uploaded successfully", url: fileUrl });
});

//database connection
(function mongoDb(){
  mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("CONNECTED TO MOBGODB"))
.catch((err)=> console.log("ERROR IN CONNECTING TO DATABASE",err)
)})()

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT ${process.env.PORT} PORT`);
});
