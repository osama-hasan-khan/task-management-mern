import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
import { createWorkSpace } from "../controllers/userWorkSpaceController.js";

const router = express.Router();

router.post("/createWorkspace", authenticate, createWorkSpace);

export default router;
