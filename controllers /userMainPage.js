"use strict";
require("dotenv").config();
const getIntrests = require("./api.controller");
const User = require("../models/User");

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

const getUserMain = (req, res) => {
  
  const userId = req.params.userName;

  User.findOne({ userName: userId }, (error, foundUser) => {
    if (error) {
    } else {
      const intrestsArray = foundUser.intrests;
      console.log(intrestsArray);
      getIntrests(intrestsArray).then((intrestsItems) => {
        shuffle(intrestsItems);
        res.json(intrestsItems);
      });
    }
  });
};

module.exports = getUserMain;
