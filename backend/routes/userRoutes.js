import express from "express";
import {
  followAndUnfollowUser,
  getUsers,
  getUserByUsername,
} from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/:username").get(getUserByUsername);
router.route("/follow/:id").patch(protect, followAndUnfollowUser);

export default router;
