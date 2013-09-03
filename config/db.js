var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);

  // Setup database and UserSchema

  return db;
}