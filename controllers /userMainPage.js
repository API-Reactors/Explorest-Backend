"use strict";
const User = require("../models/User");

const getUserMain = (req, res) => {
  console.log(req.params);
  const userId = req.params.userName;

  User.findOne({ userName: userId }, (error, foundUser) => {
    if (error) {
      console.log("Error", error);
    } else {
      console.log("UserFound", foundUser.intrests);

      const intrestsArray = foundUser.intrests;

      intrestsArray.map((item) => {
        switch (item) {
          case "books":
            console.log("user has intrest in books");
            break;
          case "movies":
            console.log("user has intrest in movies");
            break;
          case "food":
            console.log("user has intrest in foods");
            break;
          case "arts":
            console.log("user has intrest in arts");
            break;
          case "fashion":
            console.log("user has intrest in fashin");
            break;
        }
      });
    }
  });
};

module.exports = getUserMain;
