import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.post("/logoutUser", logoutCurrentUser);

export default router;
