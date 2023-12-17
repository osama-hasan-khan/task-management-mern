import express from "express";
import {
  createUser,
  getAllUsers,
  getCurrentUserProfile,
  loginUser,
  logoutCurrentUser,
  updateCurrentUserProfile,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.post("/logoutUser", logoutCurrentUser);
router.get("/getAllUsers", authenticate, getAllUsers);
router.put("/updateProfile/:userId", authenticate, updateCurrentUserProfile);
router.get("/getProfile", authenticate, getCurrentUserProfile);

export default router;
