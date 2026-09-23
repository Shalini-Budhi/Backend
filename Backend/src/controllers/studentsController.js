const students  = require("../data/studentsData");


//Get The User Data Only
const getStudents = (req,res) => {
  res.json({
    message:"get data",
    data: students
  });
};


//Get The User Data byId

const getStudentsById = (req,res) =>{
  const id = Number(req.params.id);

  const student = students.find((student) => student.id === id);

  if(!student){
    return res.status(404).json({
      message:"User Not Found"
    });
  }

  res.json({
    data:student
  });
};


module.exports = {
  getStudents,
  getStudentsById
};