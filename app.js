const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const docsRouter = require('./src/docs/router');

// Convert assets location based on what type of gulp task we are running
app.locals.asset = function(assetLocation, assetTheme){ return assetLocation; }
app.locals.site_analytics = process.env.ANALYTICS || "";

// Set template engine to ejs
app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'src/theme/')]);
app.use(express.static(path.join(__dirname, 'src/theme/public/')));
app.use(express.static(path.join(__dirname, 'src/theme/assets')));
app.use(morgan('tiny'));

// Home page
app.get('/', (req,res) => res.render('index'));

// Redirect to home if 404
app.use(function (req, res, next) {
  res.status(404).redirect('/')
});

// Initialize the express server
app.listen(3000, () => console.log('Toucan site listening on port 3000'));
