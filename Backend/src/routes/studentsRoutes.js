const express = require("express");

const router = express.Router();

const {
  getStudents,
  getStudentsById,
  createStudents
} = require("../controllers/studentsController");

//Get All Student
router.get("/", getStudents);

//Get Sudent Bt Id
router.get("/:id",getStudentsById);

//Post Api

router.post("/",createStudents);

module.exports = router;