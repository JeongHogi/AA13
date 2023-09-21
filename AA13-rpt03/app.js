var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send('<a href="/hello">Hello Page</a>');
});

app.get('/hello', function(req, res) {
    res.send('Hello AA13');
});

app.get('/comsi', function(res, res) {
    res.send('Hello Comsi!');
});

app.get('/AA13', function(req, res) {
    res.send('Hello AA13, Comsi! My first express server!!!');
});

app.get('/', function(req, res){
    res.send('<a href="http://www.naver.com">Go to naver</a>');
});

app.get('/naver', function(req,res) {
    res.send('Go to naver');
});

var server = app.listen(port, function() {
    console.log('Listening on port $d', server.address().port);
});