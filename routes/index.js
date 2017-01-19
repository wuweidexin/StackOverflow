var express = require('express');
var router = express.Router();
var controller = require('../controller/articleController');
var  passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('StackOverflow OAuth 2.0 Server');
});

router.route('/articleInfo')
.get( function(req, res, next) {
  res.render('articleInfo', {"select":"active"});
})
.post(function(req, res, next) {
  var result = controller.addArticle(req.body);
  res.render('articleInfo', {"result":result});
});
router.route('/vote')
.post(function(req, res, next){
     var result = controller.vote(req.body);
     res.render('index');
});
router.route('/login')
.get(function(req, res, next){
    res.render('login');
})
.post(function(req, res, next) {
        passport.authenticate('local', { successReturnToOrRedirect: '/', failureRedirect: '/login' });
        res.render('index');
});

module.exports = router;
