const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

//Home Routes
route.get('/', homeController.homePage);
route.post('/', homeController);

route.get('/contact', contactController.homePage);



module.exports = route;

