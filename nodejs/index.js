var express = require('express');

var app = express();
var http = require('http').createServer(app);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.17.0.3",
  user: "root",
  password: "mypassword"
});


var con2 = mysql.createConnection({
  host: "172.17.0.3",
  user: "root",
  password: "mypassword"
});


app.get('/', function(req, res) {
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Atelier Docker Wewyse rocks!');

});

app.get('/createdatabase', function(req, res) {
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE mydb3", function (err2, result) {
    if (err2) throw err2;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Database created');
    console.log("Database mydb3 created");
    });
  });
});

app.get('/createtable', function(req, res) {
  
  con2.connect(function(err3) {
     if (err3) throw err3;
     console.log("Connected!"); 
     con2.query("USE mydb3", function (err4, result) {
     if (err4) throw err4;
     console.log("mydb3 is used");
     });
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con2.query(sql, function (err5, result) {
      if (err5) throw err5;
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Table customers created in mydb3');
      console.log("Table customers created");
    });
  });
});

//app.listen(8080);
http.listen(8080, function(){
   console.log('listening on *:8080');
});
