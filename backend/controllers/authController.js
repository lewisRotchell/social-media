import catchAsync from "../utils/catchAsync.js";
import User from "../models/userModel.js";

const register = catchAsync(async (req, res, next) => {
  res.status(200).json({
    msg: "success",
  });
});

export { register };
