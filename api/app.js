'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const router = require('./routes');
const middleware = require('./middleware/error');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);
app.use(middleware.catch404);
app.use(middleware.ErrorHandler({env: process.env.NODE_ENV}));

module.exports = app;
