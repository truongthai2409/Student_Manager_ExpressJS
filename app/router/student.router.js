const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getOneStudentList,
  postStudent,
  putStudent,
  deleteStudent,
} = require("../controllers/student.controllers.js");
const { logFeature } = require("../middlewares/logger/log-feature");
const {
  checkEmty,
  checkNumber,
} = require("../middlewares/validations/student.valition");
//studentRouter.get()
studentRouter.get("/", logFeature, getStudentList);

studentRouter.get("/:id", getOneStudentList);

studentRouter.post("/", checkEmty, checkNumber, postStudent);
//cap nhat
studentRouter.put("/:id", putStudent);

studentRouter.delete("/:id", deleteStudent);

module.exports = studentRouter;
