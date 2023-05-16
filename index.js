const express = require("express");
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
console.log("howdy");

//Routes
app.get("/get_username", (req, res) => {
    function returnStudentObject(){
        const student = {
            name: "Cameron",
            securityClearance: "level 1",
        };
        return student;
    }

    const user = returnStudentObject()
    res.send(user.name);
})
app.get("/get_users", (req, res) => {
  console.log("You are in /get_users route");
  res.send("completed");
});

app.post("/get_users", (req, res) => {
  console.log("You are in post route");
  res.send("completed");
});
app.post("/create_user", (req, res) => {
  console.log("create_user");
  console.log(req.body.studentName);
  const studentToAdd = req.body.studentName;
  res.send(`You added ${studentToAdd}`);
});
app.post("/capitalize_student_names", (req, res) => {
  const studentToAdd = req.body.studentName.toUpperCase();
  res.send(`You added ${studentToAdd}`);
});
app.post("/add_user_id", (req, res) => {
  const studentToAdd = req.body.studentName.toUpperCase();
  res.send(`You added ${studentToAdd}`);
});
app.listen(PORT, console.log(`running on port ${PORT}`));
