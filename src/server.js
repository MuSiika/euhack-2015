var express = require("express");
var http = require('http');
var path = require("path");
var logger = require("morgan");

var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var debug = require("debug")("react-express-template");

require("babel/register");

var dist = path.join(__dirname, '/../dist');

var app = express();
app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express["static"](dist));

app.set("port", process.env.PORT || 3000);

/*
app.use(function(req, res, next) {
  var err;
  err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    return res.send({
      message: err.message,
      status: err.status,
      stack: err.stack
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  return res.send({
    message: err.message
  });
});*/

app.post('/save', function(req, res){
  console.log( req.body.source );
  res.send('');
});

app.get('/load', function(req, res){

  var debug = [ 'alert("Kissa;")', 'alert("Koira");' ];

  res.send( debug );
});

server = http.createServer(app);

server.listen(app.get("port"), function() {
  return debug("Express server listening on port " + server.address().port);
});
