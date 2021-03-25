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
    select: { _id: 1, username: 1, photo: 1 },
  });

  res.status(200).json({
    status: "success",
    posts,
  });
});

const getFollowingPosts = catchAsync(async (req, res, next) => {
  const user = req.user;
  //Add user posts to post list to show user's own posts
  user.following.push(user._id);
  console.log(user);

  const posts = await Post.find({ user: { $in: user.following } })
    .populate({
      path: "user",
      select: { _id: 1, username: 1, photo: 1 },
    })
    .sort("-createdAt");

  res.status(200).json({
    status: "success",
    posts,
  });
});

export { createPost, getPosts, getFollowingPosts };
