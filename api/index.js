import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to mongodb");
  } catch (error) {
    handleError(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb is disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDb is connected");
});

app.listen(8800, () => {
  connect();
  console.log("connected to backend!");
});
