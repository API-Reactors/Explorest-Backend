"use strict";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config({ path: __dirname + "/.env" });

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

const userSeed = require("./helpers/users.seed");
const { register, signIn } = require("./controllers /authorisation");
const getUserMain = require("./controllers /userMainPage");

mongoose.connect(`${mongoUrl}`);

app.get("/", (req, res) => {
  res.send("<h1>Server is Up & Running</h1>");
});
app.post("/register", register);
app.post("/signIn", signIn);
app.get("/main/:userName", getUserMain);


// userSeed();

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
