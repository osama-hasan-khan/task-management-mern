// packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import userTask from "./routes/userTasksRoutes.js";

const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/tasks", userTask);

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
