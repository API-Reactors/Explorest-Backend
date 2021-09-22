"use strict";
const User = require("../models/User");
const { req, res } = require("express");

const putIntrests = (req, res) => {

  const arrayIntrests = req.body;
  const userId = req.params.user_id;
  User.findOne({ _id: userId }, (error, userIntrests) => {
    userIntrests.intrests = arrayIntrests;

    userIntrests.save();
    res.json(userIntrests);
  });
};


module.exports = putIntrests;
