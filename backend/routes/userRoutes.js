import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);

export default router;
