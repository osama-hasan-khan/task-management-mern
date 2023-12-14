import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  createTask,
  getAlltasks,
  getTask,
  updateTask,
} from "../controllers/userTasksControllers.js";

const router = express.Router();

router.post("/createTasks", authenticate, createTask);
router.get("/getAllTasks", authenticate, getAlltasks);
router.get("/getTask/:taskId", authenticate, getTask);
router.put("/updateTask/:taskId", authenticate, updateTask);

export default router;
