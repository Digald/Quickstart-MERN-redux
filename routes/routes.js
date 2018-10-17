const express = require("express");
const router = new express.Router();
const getDataController = require("../controllers/getDataController.js");
// const submitController = require("../controllers/submitController.js");

// API GET routes
router.get("/finddata", getDataController.getData);

// API POST routes
// router.post("/submit", submitController.addData);

module.exports = router;
