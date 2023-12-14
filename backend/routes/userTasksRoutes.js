import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  createTask,
  deleteTask,
  getAlltasks,
  getTask,
  searchUserTask,
  updateTask,
} from "../controllers/userTasksControllers.js";

const router = express.Router();

router.post("/createTasks", authenticate, createTask);
router.get("/getAllTasks", authenticate, getAlltasks);
router.get("/getTask/:taskId", authenticate, getTask);
router.put("/updateTask/:taskId", authenticate, updateTask);
router.delete("/deleteTask/:taskId", authenticate, deleteTask);
router.get("/searchTask", authenticate, searchUserTask);

export default router;
