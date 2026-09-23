const express = require("express");

const app = express();

const PORT = 7000;

app.use(express.json());


const studentsRoutes = require("./src/routes/studentsRoutes");



// Day-2
app.get("/", (req, res) => {
  res.json({
    message: "Backend is running",
  });
});


app.use("/api/studentsRoutes",studentsRoutes);

// // Day-3

// const student = [
//   {
//     id:1,
//     name:"Shalini",
//     branch:"MCA"
//   },
//   {
//     id:2,
//     name:"Munemma",
//     branch:"B.Sc"
//   },
//   {
//     id:3,
//     name:"Vamsi",
//     branch:"B.tech"
//   }
// ];

// app.get("/api/student/:id",(req,res)=>{

//   const id = Number(req.params.id);

//   const foundStudent = student.find(student => student.id === id);
//   res.json(foundStudent)
// });

// Day -4

// // Middleware
// app.use(express.json());

// // POST API
// app.post("/api/user", (req, res) => {
//   const user = req.body;

//   res.json({
//     message: "POST API is created successfully",
//     data: user,
//   });
// });

// //Day - 5

// let users = [
//   {
//     id: 1,
//     name: "Shalini",
//     age: 23,
//   },
//   {
//     id: 2,
//     name: "Vamsi",
//     age: 29,
//   },
//   {
//     id: 3,
//     name: "Munemma",
//     age: 50,
//   },
// ];

// app.put("/api/users/:id", (req, res) => {

//   const id = Number(req.params.id);

//   const userIndex = users.findIndex(
//     (user) => user.id === id
//   );

//   // Check whether user exists
//   if (userIndex === -1) {
//     return res.status(404).json({
//       message: "User Not Found"
//     });
//   }

//   // Update user
//   users[userIndex] = {
//     id: id,
//     ...req.body
//   };

//   // Send response
//   res.json({
//     message: "User updated successfully",
//     data: users[userIndex]
//   });

// });

// app.patch("/api/user/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((user) => user.id === id);

//   if (!user) {
//     return res.status(400).json({
//       message:"Message Not Found",
//       data:user
//     });
//   }

//   if (req.body.name !== undefined) {
//     user.name = req.body.name;
//   }

//   if (req.body.age !== undefined) {
//     user.age = req.body.age;
//   }

//   res.json({
//     message: "User updated successfully",
//     user: user
//   });
// });

// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const userIndex = users.findIndex((user) => user.id === id);

//   if (userIndex === -1) {
//     return res.status(404).json({
//       message: "Message Not Found",
//     });
//   }
//   const deletedUser = users.splice(userIndex, 1);

//   console.log("Remaining users:", users);

//   res.json({
//     message: "User Deleted Successfully",
//     user: deletedUser[0],
//   });
// });

// Day-1



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
