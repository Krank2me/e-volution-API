const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes/index'));

module.exports = app;