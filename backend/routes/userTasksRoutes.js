import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { createTask } from "../controllers/userTasksControllers.js";

const router = express.Router();

router.post("/createTasks", authenticate, createTask);

export default router;
