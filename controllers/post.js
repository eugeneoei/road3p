var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');
var methodOverride = require('method-override');

// convert address to longitude and latitude
var NodeGeocoder = require('node-geocoder');
var options = {
  provider: 'google',

  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: process.env.KEY_SECRET, // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
var geocoder = NodeGeocoder(options);

var app = express();

app.use(methodOverride('_method'));

app.use(isLoggedIn);

// GET all posts by any users
router.get('/posts', function(req,res) {

});

// GET all posts by current user
router.get('/posts/user', function(req,res) {
  db.user.findOne({
    where: { id: req.user.dataValues.id }
  }).then(function(user) {
    user.getPosts().then(function(posts) {
      // console.log('see hereeeee', posts)
      res.render('posts/userPosts', {posts: posts})
    });
  });
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
// need to convert address to lat and long
router.post('/posts', function(req,res) {
  var latitude = 0;
  var longitude = 0;
  geocoder.geocode(req.body.address, function(err, r) {
    latitude = r[0].latitude;
    longitude = r[0].longitude;
    // console.log('see here >>>>>>>>', req.user.dataValues.id);
    db.user.findOne({
      where: { id: req.user.dataValues.id }
    }).then(function(user) {
      user.createPost({
        address: req.body.address,
        title: req.body.title,
        image_url: req.body.image_url,
        category: req.body.category,
        description: req.body.description,
        latitude: latitude,
        longitude: longitude
      }).then(function(post) {
        res.redirect('posts/user')
        // res.render('posts/userPosts', {message: 'Your post has been succesfully created!'})
      });
    });
  });
});

// CREATE new post
// router.post('/posts', function(req,res) {
//   geocoder.geocode(req.body.address, function(err, r) {
//     var latitude = r[0].latitude;
//     var longitude = r[0].longitude;
//     db.post.findOrCreate({
//       where: {
//         address: req.body.address
//       },
//       defaults: {
//         title: req.body.title,
//         image_url: req.body.image_url,
//         category: req.body.category,
//         description: req.body.description,
//         latitude: latitude,
//         longitude: longitude,
//         userId: req.user.dataValues.id
//       }
//     }).spread(function(post, created) {
//       if (created) {
//         res.render('posts/userPosts', {message: 'Your post has been succesfully created!'})
//       } else {
//         console.log('falied meh?????')
//         req.flash('error', 'Seems like you missed out some fields. Please try again.');
//         res.redirect('/home');
//       }
//     }).catch(function(error) {
//       req.flash('error', error.message);
//       res.redirect('/home');
//     });
//   })
// });


// UPDATE post
router.put('/posts/:id', function(req,res) {

});


// DELETE post
router.delete('/posts/:id', function(req,res) {

});

module.exports = router;
