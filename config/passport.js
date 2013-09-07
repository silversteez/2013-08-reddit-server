var mongoose        = require('mongoose'),
    User            = mongoose.model('User'),
    LocalStrategy   = require('passport-local').Strategy;

module.exports = function(app, config) {
  var passport = app.get('passport');
  // Implement the passport local strategy
  passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        console.log("wrong username");
        return done(null, false, { message: 'Incorrect username and/or password.' });
      }
      if (!user.validPassword(password)) {
        console.log("wrong password");
        return done(null, false, { message: 'Incorrect username and/or password.' });
      }
      return done(null, user);
    });
  }
));
}