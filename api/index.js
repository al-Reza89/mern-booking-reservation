import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

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

// middleware
app.use("/api/v1", authRoute);

app.listen(8800, () => {
  connect();
  console.log("connected to backend!");
});
