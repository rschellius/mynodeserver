// 
var http = require('http');
var express = require('express');
var routes_v1 = require('./api/routes_v1');
var bodyParser = require('body-parser')
var logger = require('morgan');

var app = express();

app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(logger('dev'));

app.use('/api/v1', routes_v1);

app.listen(process.env.PORT || 4001, function(){
	console.log('De server luistert op port 4001');	
});

module.exports = app;
