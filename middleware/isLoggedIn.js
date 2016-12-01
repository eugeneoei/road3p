module.exports = function(req, res, next) {
  if (!req.user) {
    req.flash('error', 'Oops. Seems like you are not logged in yet. If you do not have an account, sign up now!');
    res.redirect('/');
  } else {
    next();
  }
};
