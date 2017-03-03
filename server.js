var express  = require('express');
var app = express();
var path = require("path");

app.use("/stylesheets", express.static(__dirname + '/stylesheets'));
app.use("/scripts", express.static(__dirname + '/scripts'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.listen(8080);
console.log("App listening on port 8080");
