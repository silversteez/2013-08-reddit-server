var passport      = require('passport');
var mongoose        = require('mongoose'),
    User            = mongoose.model('User');

module.exports = function(app, config) {
  app.options('*', function(req, res){
    res.send(200); 
  });

  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  // Auth
  app.post('/login', passport.authenticate('local'), function(req, res, next) {
    // Implement login
    console.log(req.user.username);
  });

  app.post('/signup', function(req, res, next) {
    // Implement signup
    User.find({ username: req.body.username }, function(err, data) {
      if (data.length > 0) {

        console.log('trying to prevent another copy...');
        return res.send('username taken');

      } else {

        var newUser = new User({
          username: req.body.username,
          password: req.body.password
        });

        newUser.save(function(err) {
          if (err) {
            console.log("signup error");
          } else {
            console.log("signed up!");
          }
        });
      }
    });



  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
}