const express = require("express");
const cors = require("cors");

const userController = require("./controller/user.controller")

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userController)

module.exports = app;