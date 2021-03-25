import express from "express";
import { createPost, getPosts } from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPosts);

export default router;
