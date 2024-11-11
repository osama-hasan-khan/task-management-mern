// packages
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// files
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import userTask from "./routes/userTasksRoutes.js";
import userWorkspace from "./routes/userWorkspaceRoutes.js";
import userProject from "./routes/userProjectRoutes.js";
import userComment from "./routes/userCommentRoutes.js"

const PORT = process.env.PORT || 8080;

dotenv.config();

connectDB();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/tasks", userTask);
app.use("/api/workspace", userWorkspace);
app.use("/api/projects", userProject);
app.use("/api/comment", userComment)

app.get("/", (req, res) => {
  res.json({ message: "sever is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
