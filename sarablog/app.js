var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jade=require('jade');
var ejs=require('ejs');
var https = require('https');
var http = require('http');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();



app.use(logger());//日志
app.use(express.static(__dirname + '/public'));
app.engine('jade', jade.__express);
app.engine('html', ejs.renderFile);

app.set('title','saratitle');

app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

app.get('/test/*/*',function(req, res){
    var r ={message:"成功",code:0};
    console.log(req.params[1]);
    res.render('index.jade',r);
});

var server = app.listen(8000, function() {
    console.log('Express server listening on port : ' + server.address().port);
});
