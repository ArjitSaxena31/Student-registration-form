const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Mongo Error:", err));

app.post("/register", async (req, res) => {
  const { name, email, age, course } = req.body;

  if (!name || !email || !age || !course) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newStudent = new Student({ name, email, age, course });
    await newStudent.save();
    res.status(200).json({ message: "Student registered successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Server error." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
