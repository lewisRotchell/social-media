import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

const register = catchAsync(async (req, res, next) => {
  const { username, email, password, photo, role } = req.body;

  const user = await User.create({
    username,
    email,
    password,
    photo,
    role,
  });
  res.status(200).json({
    msg: "success",
  });
});

export { register };
