var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require("express-ejs-layouts");
var session = require('express-session');
var app = express();



app.set('view engine', 'ejs');


// this declares which is the static folder
app.use(express.static("static"));
// Form data is passed as payload of the request. Every field that has a name will be included in that payload
// and it is sent as form encoded text. When body-parser is installed it automatically parses the form body into
// a javascript object that we can use and it stores it in req.body so we can use it
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  // forces re-saving of the session, even if nothing has changed.
  resave: false,
  // stores the session, even if we haven't stored any values to it yet
  saveUninitialized: true
}));
app.use(ejsLayouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000);
