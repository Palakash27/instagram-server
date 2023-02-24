import express from "express";
import {
    registerUser,
    loginUser,
    getUserProfile,
} from "../controllers/UserController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
