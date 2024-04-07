const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

//Home Routes
route.get('/', myMiddleware, homeController.homePage, function(req, res, next){
    console.log();
    console.log('Im still here');

});
route.post('/', homeController.treatsPost);

route.get('/contact', contactController.homePage);



module.exports = route;

