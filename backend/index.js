import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import connectToDatabase from "./db/db.js";

dotenv.config(); 

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    await connectToDatabase();

    app.use("/api/auth", authRouter);

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Server startup failed:", err);
  }
};

startServer();
