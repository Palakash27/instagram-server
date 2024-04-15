import express from "express";
import {
    signUpUser,
    loginUser,
    getUserProfile,
    getSearchResults,
} from "../controllers/UserController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.route("/profile/:username").get(protect, getUserProfile);
router.route("/search").get(protect, getSearchResults);

export default router;
