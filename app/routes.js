var passport      = require('passport');

module.exports = function(app, config) {
  // Setup CORS
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', config.clientUrl);
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });

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
  app.post('/api/login', function(req, res, next) {
    // Implement login
  });

  app.post('/api/signup', function(req, res, next) {
    // Implement signup
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
}