import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";
import AppError from "../utils/AppError.js";

const register = catchAsync(async (req, res, next) => {
  const { username, email, password, photo, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return next(new AppError("User Already Exists!"), 400);
  }

  const user = await User.create({
    username,
    email,
    password,
    role,
  });

  user.password = undefined;

  res.status(201).json({
    status: "success",
    user,
    token: user.generateToken(),
  });
});

export { register };
