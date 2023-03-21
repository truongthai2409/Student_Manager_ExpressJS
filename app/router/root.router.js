const express = require("express");
// const router = express.Router();
const studentRouter = require("./student.router");
const router = express.Router();

// set url 
router.use("/students",studentRouter);

module.exports = router;