'use strict'
const axios = require("axios");
require('dotenv').config();

const Interestsnt = require('../models/Api.Model')

const book_api_key = process.env.BOOK_API_KEY;
const news_api_key = process.env.NEWS_API_KEY
const sport_api_key = process.env.SPORT_API_KEY;
const movie_api_key = process.env.MOVIE_API_KEY;

const getNews = async (req, res) => {

    //news
    const newsResponse = await axios.get(`http://api.mediastack.com/v1/news?access_key=${news_api_key}`)
    const newNews = newsResponse.data.data.map((value) => {
        if (value.image != null) {
            return new Interestsnt(
                value.title,
                value.description,
                value.image
            )
        }
        else return ("");
    });

    //books
    const bookResponse = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${book_api_key}`)
    const newbooks = bookResponse.data.results.books.map((value) => {

        return new Interestsnt(
            value.title,
            value.description,
            value.book_image
        )

    });

    //food
    const foodResponse = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
    const newfoods = foodResponse.data.meals.map((value) => {

        return new Interestsnt(
            value.strMeal,
            value.strInstructions,
            value.strMealThumb
        )

    });
    //meakup
    const makeupResponse = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`)
    const newMaekup = makeupResponse.data.map((value) => {

        return new Interestsnt(
            value.name,
            value.description,
            value.image_link
        )

    });
    //photo
    const photoResponse = await axios.get(`https://pixabay.com/api/?key=23439126-48e6990e9f2a6b0eef8dd8f7e&q=pet&image_type=photo&safesearch=true`)
    const newPhoto = photoResponse.data.hits.map((value) => {

        return new Interestsnt(
            value.tags,
            value.tags,
            value.largeImageURL
        )

    });


    //sport
    const sportResponse = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${sport_api_key}`)

    const newSport = sportResponse.data.articles.map((value) => {

        return new Interestsnt(
            value.title,
            value.description,
            value.urlToImage
        )

    });
    //anime
    const animeResponse = await axios.get(`https://api.jikan.moe/v3/search/anime?q=anime`)

    const newAnime = animeResponse.data.results.map((value) => {

        return new Interestsnt(
            value.title,
            value.synopsis,
            value.image_url
        )

    });

    
    res.json([newbooks, newNews, newfoods, newMaekup, newPhoto, newSport, newAnime]);   


}




module.exports = getNews;