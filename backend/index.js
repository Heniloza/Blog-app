import express from 'express';
import mongoose  from 'mongoose';

const app = express();
const PORT = 5000;

//database connection
(function mongoDb(){
  mongoose.connect("mongodb://127.0.0.1:27017/BlogAppMern")
.then(()=> console.log("CONNECTED TO MOBGODB"))
.catch((err)=> console.log("ERROR IN CONNECTING TO DATABASE",err)
)})()


app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT} PORT`);
});
