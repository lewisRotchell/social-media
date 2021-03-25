import express from "express";
import {
  createPost,
  getFollowingPosts,
  getPosts,
} from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPosts);
router.route("/newsfeed").get(protect, getFollowingPosts);

export default router;
