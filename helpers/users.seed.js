"use strict";

const User = require("../models/User");

const userSeed = () => {
  const newUser = new User({
    userName: "Bayan",
    fullName: "Bayan Qutshan",
    email: "1@gmail.com",
    password: "123456",
  });

  newUser.save();
  console.log("successfully saved");
};

module.exports = userSeed;
