import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import {
  createTask,
  deleteTask,
  getAlltasks,
  getTask,
  markAsACompleted,
  searchUserTask,
  updateTask,
  countEachTasks,
} from "../controllers/userTasksControllers.js";

const router = express.Router();

router.post("/createTasks", authenticate, createTask);
router.get("/getAllTasks", authenticate, getAlltasks);
router.get("/getTask/:taskId", authenticate, getTask);
router.put("/updateTask/:taskId", authenticate, updateTask);
router.delete("/deleteTask/:taskId", authenticate, deleteTask);
router.get("/searchTask", authenticate, searchUserTask);
router.put("/markAsACompleted/:taskId", authenticate, markAsACompleted);
router.get("/status/count", authenticate, countEachTasks);
export default router;
