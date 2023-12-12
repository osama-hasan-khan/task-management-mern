import express from "express";
import {
  createUser,
  getAllUsers,
  loginUser,
  logoutCurrentUser,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.post("/logoutUser", logoutCurrentUser);
router.get("/getAllUsers", authenticate, getAllUsers);

export default router;
