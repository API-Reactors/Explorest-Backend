"use strict";
const axios = require("axios");
require("dotenv").config();

const Interestsnt = require("../models/Api.Model");

const book_api_key = process.env.BOOK_API_KEY;
const news_api_key = process.env.NEWS_API_KEY;
const sport_api_key = process.env.SPORT_API_KEY;
const movie_api_key = process.env.MOVIE_API_KEY;

const getIntrests = async (intrest) => {
  
let intrestsItems =[];

  //news
  if (intrest.includes("news")) {
    console.log("User has intrest in News");
    const newsResponse = await axios.get(
      `http://api.mediastack.com/v1/news?access_key=${news_api_key}`
    );
    const newNews = newsResponse.data.data.map((value) => {
      if (value.image != null) {
        return new Interestsnt(value.title, value.description, value.image);
      } else return "";
    });
    Array.prototype.push.apply(intrestsItems, newNews);
  }

  //books
  if (intrest.includes("books")) {
    console.log("User has intrest in Books");
    const bookResponse = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${book_api_key}`
    );
    const newbooks = bookResponse.data.results.books.map((value) => {
      return new Interestsnt(value.title, value.description, value.book_image);
    });
    Array.prototype.push.apply(intrestsItems, newbooks);
  }

  //food
  if (intrest.includes("food")) {
    console.log("User has intrest in Food");
    const foodResponse = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    );
    const newfoods = foodResponse.data.meals.map((value) => {
      return new Interestsnt(
        value.strMeal,
        value.strInstructions,
        value.strMealThumb
      );
    });
    Array.prototype.push.apply(intrestsItems, newfoods);
  }
  //meakup

  if (intrest.includes("makeup")) {
    console.log("User has intrest in Makeup");
    const makeupResponse = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products.json`
    );
    const newMakeup= makeupResponse.data.slice(0, 19).map((value) => {
      return new Interestsnt(value.name, value.description, value.image_link);
    });
    Array.prototype.push.apply(intrestsItems,newMakeup);
  }
  //photo

  if (intrest.includes("photo")) {
    console.log("User has intrest in Photo-Pets");
    const photoResponse = await axios.get(
      `https://pixabay.com/api/?key=23439126-48e6990e9f2a6b0eef8dd8f7e&q=pet&image_type=photo&safesearch=true`
    );
    newPhoto = photoResponse.data.hits.map((value) => {
      return new Interestsnt(value.tags, value.tags, value.largeImageURL);
    });
    Array.prototype.push.apply(intrestsItems, newPhoto);
  }

  //sport
  if (intrest.includes("sport")) {
    console.log("User has intrest in Sport");
    const sportResponse = await axios.get(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${sport_api_key}`
    );

    const newSport = sportResponse.data.articles.map((value) => {
      return new Interestsnt(value.title, value.description, value.urlToImage);
    });
    Array.prototype.push.apply(intrestsItems, newSport);
  }

  //anime
  if (intrest.includes("anime")) {
    console.log("User has intrest in Anime");
    const animeResponse = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=anime`
    );

    const newAnime = animeResponse.data.results.map((value) => {
      return new Interestsnt(value.title, value.synopsis, value.image_url);
    });
    Array.prototype.push.apply(intrestsItems, newAnime);
  }

//movies
if (intrest.includes("movies")) {
  console.log("User has intrest in Movies");
    const moviesResponse = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=anime`
    );

    const newMovies = moviesResponse.data.results.map((value) => {
      return new Interestsnt(value.title, value.synopsis, value.image_url);
    });
    Array.prototype.push.apply(intrestsItems, newMovies);
  }


 return intrestsItems;
};

module.exports = getIntrests;
