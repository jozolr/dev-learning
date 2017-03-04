var express  = require('express');
var app = express();
var path = require("path");
var mysql = require('mysql');

app.use("/stylesheets", express.static(__dirname + '/stylesheets'));
app.use("/scripts", express.static(__dirname + '/scripts'));

var connection = mysql.createConnection({
  'host'     : 'sylphidus.c4wigczk921v.us-west-2.rds.amazonaws.com',
  'user'     : 'jozolr',
  'password' : 'Password1',
  'database' : 'sylphidus_bd',
  'port' : '3306',
  'acquireTimeout' : 1000000,
  'connectionLimit' : 10
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log(err);
}
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

var server = app.listen(3000);
console.log("App listening on port 3000");
