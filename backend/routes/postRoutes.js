import express from "express";
import {
  createPost,
  getFollowingPosts,
  getPosts,
  toggleLike,
} from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createPost).get(protect, getPosts);
router.route("/newsfeed").get(protect, getFollowingPosts);
router.route("/like/:id").patch(protect, toggleLike);

export default router;
