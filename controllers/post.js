var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var methodOverride = require('method-override');

var app = express();

app.use(methodOverride('_method'));

app.use(isLoggedIn);

// GET all posts
router.get('/posts', function(req,res) {
  
});

// GET one post
router.get('/posts/:id', function(req,res) {

});

// GET form to crete new post
router.get('/posts/new', function(req,res) {

})

// GET form to edit post
router.get('/posts/:id/edit', function(req,res) {

});


// CREATE new post
router.post('/posts', function(req,res) {

});


// UPDATE post
router.put('/posts/:id', function(req,res) {

});


// DELETE post
router.delete('/posts/:id', function(req,res) {

});

module.exports = router;
