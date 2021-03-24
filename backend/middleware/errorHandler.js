import AppError from "../utils/AppError.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode === 200 ? 500 : err.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  });
};

export default errorHandler;
