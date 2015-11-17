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

var session = require('express-session')
app.use(session({
  name: 'session',
  secret: 'keyboard cat'
}))

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express["static"](dist));

app.use(express.static('static'));

app.set("port", process.env.PORT || 3000);

// initialize database
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function() {

  db.run('CREATE TABLE scripts (uid TEXT PRIMARY KEY, script TEXT)');

});

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
  var source = req.body.source;

  var uid = req.session.id;

  console.log( [ uid , source ] );

  db.run("INSERT OR REPLACE INTO scripts VALUES (?,?)", [ uid , source ] );

  res.send('');
});

app.get('/load', function(req, res){

  db.all("SELECT * FROM scripts", function(err, rows) {

        var r = [];

        rows.forEach(function (row) {
            r.push( row.script );
        });

        res.send( r );
    });

});

server = http.createServer(app);

server.listen(app.get("port"), function() {
  return debug("Express server listening on port " + server.address().port);
});
