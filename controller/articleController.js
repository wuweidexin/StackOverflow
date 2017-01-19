//var redis = require("redis"),
//    client = redis.createClient();
var config = require("./config");
const uuidV1 = require('uuid/v1');
var weekSeconds = 7 * 86400;
var current = Date.parse(new Date());
/* GET users listing. */
var article = {
    addArticle : function(article){
        try {
            var id = uuidV1();
            var voted = 'vote:'+ id;
            var key = 'article:'+id;
            //client.sadd(voted, article.poster);
            //client.expire(voted, weekSeconds);
            //var now = Date.parse(new Date());
            //article.id = id;
            //article.vote = 1;
            //client.hmset(key, article);
            //client.zadd('score:', current+weekSeconds, key);
            //client.zadd('time:', current, key);
        } catch (e) {
            console.log(e);
            return "add fail";
        }
        //保存
        return "add success";
    },
    vote : function(article) {
        var voteScore = 432;
        var article_id = article['id'];
        var key = 'article:'+article_id;
        var cutoff = current - weekSeconds;
        //if(client.zscore('time:', key) < cutoff) {
        //    return;
        //}
        var user = article.poster;
        //if(client.sadd('voted:'+article_id, user)) {
        //    client.zincrby('score:', key, voteScore);
        //    client.hincrby(key, 'vote', 1);
        //}
    },
    articles : function(page, order) {
        if(!order) {
            order = 'score:';
        }
        var start = (page -1) * 25;
        var end = start + 25 - 1;
        //ids = client.zrevrange()
    }
}
module.exports = article;