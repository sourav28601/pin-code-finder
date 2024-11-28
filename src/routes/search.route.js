const express = require('express');
const searchRoute = express.Router();
const searchController = require('../controller/search.controller');
const favouriteController = require('../controller/favourite.controller');

searchRoute.get('/', searchController.getSearchPage);
searchRoute.post('/code', searchController.performSearch);
searchRoute.get('/favourite/all', favouriteController.getFavouritesPage);
searchRoute.post('/favourite', favouriteController.addFavourite);

module.exports = searchRoute;
