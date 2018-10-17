const fs = require("fs");
const db = require("../models");

// Add database connection for script
const mongoose = require("mongoose");
const configDB = require("../config/database.js");
mongoose.connect(configDB.url);

// import all of my models
const Books = db.Book;

// import JSON data
console.log(__dirname);
const books = JSON.parse(fs.readFileSync(__dirname + "/books.json", "utf-8"));

async function deleteData() {
  await Books.remove();
  console.log("Pages data has been removed...");
  process.exit();
}

async function loadData() {
  try {
    await Books.insertMany(books);
    console.log("JSON data has been added...");
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}

if (process.argv.includes("--delete")) {
  deleteData();
} else {
  loadData();
}
