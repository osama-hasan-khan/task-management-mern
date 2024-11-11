import express from "express";
import {
  createProject,
  deleteProject,
  getProjectById,
  getProjectsByWorkspace,
  updateProject,
} from "../controllers/userProjectController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/projects", authenticate, createProject);
router.get(
  "/projects/workspace/:workspaceId",
  authenticate,
  getProjectsByWorkspace
);
router.get("/projects/:projectId", authenticate, getProjectById);
router.put("/projects/:projectId", authenticate, updateProject);
router.delete("/projects/:projectId", authenticate, deleteProject);

export default router;
