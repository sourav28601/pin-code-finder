const express = require('express');
const route = express.Router();
const searchRoute = require("./search.route");

route.use('/search',searchRoute);
module.exports = route;