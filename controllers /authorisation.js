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
  res.json({ message: "Successfully Registered, Please login now.", user: {
    _id: newUser._id,
    userName: newUser.userName,
    fullName: newUser.fullName,
    email: newUser.email,
    intrests: newUser.intrests ,
    likes: newUser.likes
   }});
};

const signIn = (req, res) => {
  const { userName, password } = req.body;
  
  User.findOne({ userName: userName }, (error, foundUser) => {
    if (foundUser) {
      console.log({foundUser});
      if (foundUser.password == password) {
        res.json({message: "Login Successfull", user: {
          _id: foundUser._id,
          userName: foundUser.userName,
          fullName: foundUser.fullName,
          email: foundUser.email,
          intrests: foundUser.intrests ,
          likes: foundUser.likes
         }});
      } else {
        res.json({message:"InCorrect Password !"});
      }
    } else {
      res.json({message:"User Not Found :("});
    }
  });
};

module.exports = { register, signIn };
