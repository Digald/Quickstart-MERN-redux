const db = require("../models");

exports.getData = async (req, res) => {
  const books = await db.Book.find();
  res.json({
    books
  });
};
