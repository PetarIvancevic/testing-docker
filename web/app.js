'use strict';

const PORT = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const app = express();
const template = require('./src/template');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./dist'));

app.get('*', (req, res) => res.status(200).send(template));
app.listen(PORT);
