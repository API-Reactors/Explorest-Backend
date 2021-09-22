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
    // console.log("User has intrest in News");
    const newsResponse = await axios.get(
      `https://gnews.io/api/v4/search?q=global&token=6ceb0d2c18cf296eaeccacc8df22694c&lang=en`
    );
    const newNews = newsResponse.data.articles.map((value) => {
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
    // console.log("User has intrest in Food");
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
  //makeup

  if (intrest.includes("makeup")) {
    // console.log("User has intrest in Makeup");
    const makeupResponse = await axios.get(
      `http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4.9`
    );
    const newMakeup= makeupResponse.data.slice(0, 19).map((value) => {
      return new Interestsnt(value.name, value.description, value.image_link);
    });
    Array.prototype.push.apply(intrestsItems,newMakeup);
  }
  //animal

  if (intrest.includes("animal")) {
    // console.log("User has intrest in Photo-Pets");
    const animalResponse = await axios.get(
      `https://pixabay.com/api/?key=23439126-48e6990e9f2a6b0eef8dd8f7e&q=animal&image_type=photo&safesearch=true`
    );
    const newAnimal = animalResponse.data.hits.map((value) => {
      return new Interestsnt(value.tags, value.tags, value.largeImageURL);
    });
    Array.prototype.push.apply(intrestsItems, newAnimal);
  }

  //sport
  if (intrest.includes("sport")) {
    // console.log("User has intrest in Sport");
    const sportResponse = await axios.get(
      `https://gnews.io/api/v4/search?q=barcelona&token=6ceb0d2c18cf296eaeccacc8df22694c&lang=en`
    );

    const newSport = sportResponse.data.articles.map((value) => {
      return new Interestsnt(value.title, value.description, value.image);
    });
    Array.prototype.push.apply(intrestsItems, newSport);
  }

  //anime
  if (intrest.includes("anime")) {
    // console.log("User has intrest in Anime");
    const animeResponse = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=anime&rated=pg13`
    );

    const newAnime = animeResponse.data.results.map((value) => {
      return new Interestsnt(value.title, value.synopsis, value.image_url);
    });
    Array.prototype.push.apply(intrestsItems, newAnime);
  }

  
  // Treeeeeeees ------- 

  if (intrest.includes("tree")) {
    // console.log("User has intrest in tree");
      const treeResponse = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=zFQ_Z1BIlXm8s9RrK2ZlSKQL9MLUyn6nceDv6EdT5mU&query=tree&per_page=15&content_filter=high`
      );
  
      const newTree = treeResponse.data.results.map((value) => {
        return new Interestsnt(value.description, value.alt_description, value.urls.regular);
      });
      Array.prototype.push.apply(intrestsItems, newTree);
    }
  // https://api.unsplash.com/search/photos?client_id=zFQ_Z1BIlXm8s9RrK2ZlSKQL9MLUyn6nceDv6EdT5mU&query=trees&per_page=15

if (intrest.includes("art")) {
  // console.log("User has intrest in art");
    const artResponse = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=zFQ_Z1BIlXm8s9RrK2ZlSKQL9MLUyn6nceDv6EdT5mU&query=design&per_page=15&content_filter=high`
    );

    const newArt = artResponse.data.results.map((value) => {
      return new Interestsnt(value.description, value.alt_description, value.urls.regular);
    });
    Array.prototype.push.apply(intrestsItems, newArt);
  }
  //memes
  
  if (intrest.includes("memes")) {
    // console.log("User has intrest in Mems");

    let memesArr=[];
for (let i = 0; i < 20; i++) {
      const memesResponse = await axios.get(
        `https://some-random-api.ml/meme`
      );
      const newMemes = memesResponse.data;
       const memes = new Interestsnt(newMemes.caption, newMemes.caption, newMemes.image);
       memesArr.push(memes);
      }; 
  
      Array.prototype.push.apply(intrestsItems, memesArr);
    }

    //colors
  
  if (intrest.includes("color")) {
    // console.log("User has intrest in Colors");

  let colorArr=[];
for (let i = 0; i < 20; i++) {
      let colorResponse = await axios.get(
        `http://www.colourlovers.com/api/palettes/random?format=json`
      );
 
      let newColor = colorResponse.data[0];
       let color = new Interestsnt(newColor.userName, newColor.title, newColor.imageUrl);
       colorArr.push(color);
      }; 
   
      Array.prototype.push.apply(intrestsItems, colorArr);
    }

//colors.toString()

 return intrestsItems;
};

module.exports = getIntrests;
