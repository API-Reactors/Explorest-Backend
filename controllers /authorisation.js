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
  // console.log("userCreated");
  res.json({ message: "Successfully Registered, Please login now." });
};

const signIn = (req, res) => {
  const { userName, password } = req.body;
  
  User.findOne({ userName: userName }, (error, foundUser) => {
    if (foundUser) {
      // console.log("UserFound");
      if (foundUser.password == password) {
        res.json({message: "Login Successfull", user: foundUser});
      } else {
        res.json({message:"InCorrect Password !"});
      }
    } else {
      res.json({message:"User Not Found :("});
    }
  });
};

module.exports = { register, signIn };
