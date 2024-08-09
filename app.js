// imports
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyPaarser = require('body-parser');
const mongoose = require('mongoose');

// apply imports 
app.use(morgan('dev'));
app.use(bodyPaarser.urlencoded({ extended: false }));
app.use(bodyPaarser.json());

// routes 
const articleRoutes = require('./api/routes/article')

// connect mongoose 
mongoose.connect('mongodb+srv://3017093:' + process.env. + '@molecular-insights.ktl3kot.mongodb.net/?retryWrites=true&w=majority&appName=Molecular-Insights')

// enable routes
app.use('/article', articleRoutes)

// enable cors
const cors = require("cors");
const corsOptions = {
     origin: '*',
     credentials: true,
     optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
     const error = new Error("Not Found");
     error.status = 404;
     next(error);
})

app.use((error, req, res, next) => {
     res.status(error.status || 500);
     res.json({
          error: {
               message: error.message
          }
     })
})

// handle all /article requests to the article routes folder


module.exports = app

