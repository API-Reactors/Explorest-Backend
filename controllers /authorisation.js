"use strict";

const User = require("../models/User");

const register = (req,res) => {
    const {userName,fullName,email,password}=req.body;
  const newUser = new User({
    userName,
    fullName,
    email,
    password,
    interests:[],
    likes:[],
  });
  newUser.save();
  console.log("userCreated");
  res.json(newUser);
};
module.exports=register;