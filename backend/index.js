import express from 'express';
import mongoose  from 'mongoose';
import dotenv from 'dotenv'

const app = express();

//middlewares
dotenv.config();

//database connection
(function mongoDb(){
  mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("CONNECTED TO MOBGODB"))
.catch((err)=> console.log("ERROR IN CONNECTING TO DATABASE",err)
)})()




app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT ${process.env.PORT} PORT`);
});
