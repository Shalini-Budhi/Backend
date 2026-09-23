const express = require("express");

const router = express.Router();

const {
  getStudents,
  getStudentsById
} = require("../controllers/studentsController");

router.get("/", getStudents);
router.get("/:id",getStudentsById)

module.exports = router;