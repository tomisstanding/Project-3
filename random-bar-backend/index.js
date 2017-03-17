require('dotenv').config();
const express        = require('express');
const bodyParser     = require('body-parser');
const logger         = require('morgan');
const path           = require('path');
const methodOverride = require('method-override');
const session        = require('express-session');
const cors           = require('cors');
const app            = express();
const jwt            = require('jsonwebtoken');
const PORT           = process.env.PORT || 8000;

// config cors
app.use(cors());

// config morgan
app.use(logger('dev'));

// config path
app.use(express.static(path.join(__dirname, 'public')));

// config body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// config ejs
app.set('view engine', 'ejs');

// config methodOverride
app.use(methodOverride('_method'));

// link to resources
app.use('/', require('./resources'));

// config local host port
app.listen(PORT, () => {
  console.log('Server is listening on', PORT);
});

// export app for test suite
module.exports = app;
