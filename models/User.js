"use strict";

const mongoose = require("mongoose");
var encrypt = require('mongoose-encryption');
require("dotenv").config({ path: __dirname + "/.env" });

const userSchema = new mongoose.Schema({
  userName: { type: String, unique:true , required: true },
  fullName: { type: String , required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true  },
  intrests: {type: Array},
  likes:{type: Array},
});

var secret = process.env.SOME_LONG_UNGUESSABLE_STRING;
userSchema.plugin(encrypt, { secret: secret, encryptedFields:["password"]});

const User = mongoose.model("User", userSchema);

module.exports = User;
