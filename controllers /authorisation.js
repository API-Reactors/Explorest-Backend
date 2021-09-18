"use strict";

const User = require("../models/User");

const register = (req, res) => {
  const { userName, fullName, email, password } = req.body;
  const newUser = new User({
    userName,
    fullName,
    email,
    password,
    intrests: [],
    likes: [],
  });

  newUser.save();
  console.log("userCreated");
  res.json(newUser);
};

const signIn = (req, res) => {
  const { userName, password } = req.body;
  User.findOne({ userName: userName }, (error, foundUser) => {
    if (foundUser) {
      console.log("UserFound");
      if (foundUser.password == password) {
        res.json("Successfully Signed In !");
      } else {
        res.json("InCorrect Password !");
      }
    } else {
      res.json("User Not Found :(");
    }
  });
};

module.exports = { register, signIn };
