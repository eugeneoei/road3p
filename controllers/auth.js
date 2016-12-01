var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();

// GET signup page
// router.get("/signup", function(req,res){
//   res.render("auth/signup");
// })

// GET login page
// router.get("/login", function(req,res){
//   res.render("auth/login");
// })

// handle user signup registration
router.post('/signup', function(req, res) {
  // find or create a user, providing the name and password as default values
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password
    }
  }).spread(function(user, created) {
    if (created) {
      // if created, success and redirect home
      // here ensures user is logged in immediately after singup
      passport.authenticate('local', {
        successRedirect: '/home',
        successFlash: 'Your account has been created and you\'re now logged in!'
      })(req, res);
    } else {
      // if not created, the email already exists
      console.log('Email already exists');
      req.flash('error', 'The email you entered already exists. Please use another email.');
      res.redirect('/');
    }
  }).catch(function(error) {
    // if an error occurs, let's see what the error is
    console.log('An error occurred: ', error.message);
    req.flash('error', error.message);
    res.redirect('/');
  });
});

// handle user login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  successFlash: 'Welcome back!',
  failureRedirect: '/',
  failureFlash: 'Seems like the email and password do not match. Please try again.',
}));

// handle user logout
router.get('/logout', function(req, res) {
  req.logout();
  console.log('logged out');
  req.flash('success', 'You have successfully logged out');
  res.redirect('/');
});

module.exports = router;
