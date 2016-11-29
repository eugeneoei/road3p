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
  db.post.findOrCreate({
    where: {
      address: req.body.address
    },
    defaults: {
      title: req.body.title,
      image_url: req.body.image_url,
      category: req.body.category,
      description: req.body.description,
    }
  }).spread(function(post, created) {
    if (created) {
      res.render('posts/userPosts', {message: 'Your post has been succesfully created!'})
    } else {
      console.log('falied meh?????')
      req.flash('error', 'Seems like you missed out some fields. Please try again.');
      res.redirect('/home');
    }
  }).catch(function(error) {
    req.flash('error', error.message);
    res.redirect('/home');
  });
});


// UPDATE post
router.put('/posts/:id', function(req,res) {

});


// DELETE post
router.delete('/posts/:id', function(req,res) {

});

module.exports = router;
