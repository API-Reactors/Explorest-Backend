"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String },
  fullName: { type: String },
  email: { type: String },
  password: { type: String },
  intrests: {type: Array},
  likes:{type: Array},
});

const User = mongoose.model("User", userSchema);

module.exports = User;
