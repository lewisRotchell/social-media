const getUsers = (req, res, next) => {
  res.status(200).json({
    msg: "success",
  });
};

export { getUsers };
