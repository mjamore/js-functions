// Library dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	fs = require('fs'),
	path = require('path');


// Require other JS files
var functionDefinitions = require(__dirname + '/../public/function-definitions.js'),
	processFile = require(__dirname + '/process-file.js');


// Locally scope copies of external functions and objects
var functions = functionDefinitions.functions,
	writeContentsToFile = processFile.writeContentsToFile,
	buildString = processFile.buildString;


// Create Express app
var app = express();
// var allowCrossDomain = function(req, res, next) {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// 	next();
// }


// Middleware
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(allowCrossDomain);


// Routes
app.post('/', function(req, res) {
	var fileContents = buildString(req.body);
	writeContentsToFile(fileContents);
	res.sendFile( path.join(__dirname, '../download.html') );
});

app.get('/', function(req, res) {
	res.sendFile( path.join(__dirname, '../index.html') );
});

app.get('/test', function(req, res) {
	res.sendFile( path.join(__dirname, '../test.html') );
});


// Start server
app.listen('5005', function() {
	console.log('server running on localhost:5005');
});