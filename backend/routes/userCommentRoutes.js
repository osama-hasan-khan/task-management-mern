import express from "express";
import {
  addComment,
  getCommentsByTask,
  updateComment,
  deleteComment,
} from "../controllers/userCommentController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/comments", authenticate, addComment);
router.get("/comments/task/:taskId", authenticate, getCommentsByTask);
router.put("/comments/:commentId", authenticate, updateComment);
router.delete("/comments/:commentId", authenticate, deleteComment);

export default router;
