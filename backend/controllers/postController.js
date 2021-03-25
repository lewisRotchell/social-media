import catchAsync from "../utils/catchAsync.js";
import Post from "../models/postModel.js";
import AppError from "../utils/AppError.js";

const createPost = catchAsync(async (req, res, next) => {
  const user = req.user;

  const newPost = new Post({
    user: req.user._id,
    text: req.body.text,
  });

  const post = await newPost.save();
  res.status(200).json({
    status: "success",
    post,
  });
});

const getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find().populate({
    path: "user",
    select: "_id, photo, username",
  });

  res.status(200).json({
    status: "success",
    posts,
  });
});

export { createPost, getPosts };
