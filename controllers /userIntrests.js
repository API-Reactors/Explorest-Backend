"use strict";
const User = require("../models/User");
const { req, res } = require("express");

const putIntrests = (req, res) => {
  const arrayIntrests = req.body; //
  const userId = req.params.user_id;
  User.findById({ _id: userId }, (error, userIntrests) => { 
    userIntrests.intrests.push(arrayIntrests);
    userIntrests.save();
    res.json(userIntrests.intrests);
  });
};
module.exports = putIntrests;
