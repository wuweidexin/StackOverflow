var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/oauthtowdb');
var ClientSC = mongoose.Schema({
  clientID:  String,
  redirectURI: String,
  userID:   String,
  username: String,
  password:String
});
var Client = mongoose.model('Client', ClientSC);

exports.find = function(key, done) {
  var code = codes[key];
  return done(null, code);
};

exports.save = function(code, clientID, redirectURI, userID, done) {
  var cli = new Client({"clientID":clientID,"redirectURI":redirectURI,"userID":userID });
  cli.save(function (err, product, numAffected) {
    if (err){
      console.log('保存失败')
    }
  })
};
