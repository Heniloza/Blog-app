import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authRouter);

//database connection
(function mongoDb(){
  mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("CONNECTED TO MOBGODB"))
.catch((err)=> console.log("ERROR IN CONNECTING TO DATABASE",err)
)})()

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT ${process.env.PORT} PORT`);
});
