require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('finished');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const {globalMiddleware} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//My own middleware
app.use(globalMiddleware);
app.use(routes);


app.on('finished', () =>{
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Server running on port 3000');
    });
});
