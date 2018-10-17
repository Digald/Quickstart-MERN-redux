const db = require("../models");

exports.getData = async (req, res) => {
  res.json({
    message: "Welcome to the data"
  });
};
