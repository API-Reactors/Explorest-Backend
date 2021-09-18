"use strict";
const User = require("../models/User");
const { req, res } = require("express");
//add intrests :

const addLikePost = (req, res) => {
  const { title, imgUrl, description, comment } = req.body;
  const userIdentity = req.params.user_id;
  User.findByIdAndUpdateLike({ _id: userIdentity }, (err, userInfo) => {
    userInfo.likes.push({ title, imgUrl, description, comment });
    userInfo.save();
    res.json(userInfo.likes);
  });
};

const deleteLikePost = (req, res) => {
  const {title,imgUrl,description, comment} = req.body;
  const userIdentity = req.params.user_id;
  User.findByIdAndUpdateLike ({_id:userIdentity},(err,userInfo)=>{
    let indexOfPost = userInfo.likes.findIndex((i) => i.title === title);
    console.log({ indexOfPost });
  
    userInfo.likes.splice(indexOfPost, 1);
    console.log({userInfo});
    res.json(userInfo.likes);
})
}

const check = (req, res) => {
  // let likes1 = [{ title: "titlje" }, { title: "title" }];
  // let indexOfPost = likes1.findIndex((i) => i.title === "title");
  // console.log({ indexOfPost });

  // likes1.splice(indexOfPost, 1);
  console.log( "hello" );
};

// const deletepost =(req, res) =>{
// console.log(req.params);
// const userIdentity = req.params.user_id;
//   user.deleteOnepost({ _id: userIdentity }, (err, deletepost) => {
//     res.json(deletepost);
//   });

// }
// const updatDetails = (req, res) => {

//     const userIdentity = req.params.user_id;

// }
module.exports = { addLikePost, check, deleteLikePost };
