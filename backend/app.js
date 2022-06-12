const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute.js");
const navRouter = require("./routes/navRoute");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if ((process.env.NODE_ENV = "developement")) {
  app.use(morgan("tiny")); // logging info about user using morgan package, see more about morgan on npm registry
}

//Authentication Routes
app.use("/", navRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
