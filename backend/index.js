const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

//database connection
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ozahenil73:ozahenil73@cluster0.lxtlh.mongodb.net/blog/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("CONNECTED TO MONGODB");
    
  } catch (error) {
    console.log("error in connecting to database",error);
    
  }
};

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT} PORT`);
  connectDb();
});
