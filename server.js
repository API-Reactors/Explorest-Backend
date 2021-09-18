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
const {addLikePost,check} =require('./controllers/userLikes')


mongoose.connect(`${mongoUrl}`);

app.get("/", (req, res) => {
  res.send("<h1>Server is Up & Running</h1>");
});

// userSeed();
app.put('/addLike/ :user_id', addLikePost)
// app.post("/user",userDetails),
// app.delete("/user", deleteDetails );
// app.update("/user", updatDetails );
app.get("/user",check);
app.put('/deleteLike/ :user_id', deleteLikePost)




app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
