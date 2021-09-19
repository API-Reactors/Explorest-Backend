"use strict";
const User = require("../models/User");
const { req, res } = require("express");
//add intrests :

const addLikePost = (req, res) => {
  const { title, imgUrl, description, comment } = req.body;
  const userIdentity = req.params.user_id;
  User.findById({ _id: userIdentity }, (err, userInfo) => {
    userInfo.likes.push({ title: title, imgUrl: imgUrl, description: description, comment: comment });
    // console.log(userInfo)
    userInfo.save();
    res.json(userInfo.likes);
  });
};

const deleteLikePost = (req, res) => {
  const { title} = req.body;
  const userIdentity = req.params.user_id;
  User.findById({ _id: userIdentity }, (err, userInfo) => {
    let indexOfPost = userInfo.likes.findIndex((i) => i.title === title);
    userInfo.likes.splice(indexOfPost, 1);
    // console.log({ userInfo });
    userInfo.save();
    res.json(userInfo);
  })
}

const updateLikePost = (req, res) => {

  const { title,newcomment} = req.body;
  const userIdentity = req.params.user_id;
  User.findById({ _id: userIdentity }, (err, userInfo) => {
    let idx = userInfo.likes.findIndex((i) => i.title === title);
    let likeee = userInfo.likes[idx]
    likeee['comment'] = newcomment
    userInfo.likes[idx] = likeee
    console.log(userInfo.likes);
    userInfo.save();
    res.json(userInfo.likes);
  })
}

module.exports = { addLikePost, deleteLikePost, updateLikePost };
