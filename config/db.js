var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);

  var UserSchema = new Schema({
    username: String
  });

  mongoose.model('User', UserSchema);

  return db;
};