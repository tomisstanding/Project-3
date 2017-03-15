require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const path           = require('path');
const methodOverride = require('method-override');
const yelp           = require('yelp-fusion');
const session        = require('express-session');


const app            = express();
const PORT           = process.env.PORT || 3000;

// config morgan
app.use(logger('dev'));

// config path
app.use(express.static(path.join(__dirname, 'public')));

// config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// config ejs
app.set('view engine', 'ejs');

// config methodOverride
app.use(methodOverride('_method'));

// config session
app.use(session({
  secret: 'Taco Cat',
  resave: false,
  saveUninitialized: true
}));

// link to resources
app.use('/', require('./resources'));

// config local host port
app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});

// export app for test suite
module.exports = app;
