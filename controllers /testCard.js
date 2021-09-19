"use strict";
const axios = require("axios");
require("dotenv").config();

const Interestsnt = require("../models/Api.Model");
const book_api_key = process.env.BOOK_API_KEY;

const getTest = async (req,res) =>{
    const bookResponse = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${book_api_key}`
      );
      const newbooks = bookResponse.data.results.books.map((value) => {
        return new Interestsnt(value.title, value.description, value.book_image);
      });

      res.json(newbooks)



}

module.exports = getTest;