var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const lineRouter = require('./routes/line');

var app = express();
app.use(cors()) //allow all origin

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/line', lineRouter); //http://localhost:4000/line

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;