const express = require("express");
const cowsay = require("cowsay");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/get_cow", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a moooodule",
      e: "oO",
      T: "U ",
    })
  );
});

app.post("/think_cow", (req, res) => {
  res.send(
    cowsay.think({
      text: req.body.message,
      e: "oO",
      T: "U ",
    })
  );
});

app.post("/squirrel_thinks", (req, res) => {
  res.send(
    cowsay.think({
      text: req.body.message,
      f: "SQUIRREL",
      e: "oO",
      T: "U ",
    })
  );
});

app.get("/users", (req, res) => {
  // Route logic here
});

app.post('/login', (req, res) => {
  // Route logic here
});

app.put('/users/:id', (req, res) => {
  // Route logic here
});

app.get("/profile", (req, res) => {
  // Route logic here
});

app.listen(PORT, console.log(`running on port ${PORT}`));