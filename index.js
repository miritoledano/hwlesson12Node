const express = require("express");
const mongoose = require("mongoose");
 const userRouter = require("./routes/user");
const toyRouter = require("./routes/toys"); // הוספתי ייבוא של משתנה bookRouter
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/myLibrary")
  .then(() => {
    console.log("MongoDB connected!!!")
  })
  .catch(err => {
    console.error("Cannot connect to MongoDB:", err);
    process.exit(1);
  });

app.use("/toys", toyRouter);
 app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("App is listening on port 4000");
});
