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

const userSeed = require('./helpers/users.seed');
const {addLikePost,deleteLikePost,updateLikePost} =require('./controllers/userLikes')


mongoose.connect(`${mongoUrl}`);

app.get("/", (req, res) => {
  res.send("<h1>Server is Up & Running</h1>");
});

// userSeed();
app.put('/addLike/:user_id', addLikePost)
app.put('/deleteLike/:user_id', deleteLikePost)
app.put('/updateLike/:user_id', updateLikePost)




app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
