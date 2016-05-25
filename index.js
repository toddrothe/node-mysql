var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : '8889',
  user     : 'root',
  password : 'root',
  database : 'musicians'
});
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

app.get("/",function(req,res){
  var uid = req.param.uid;
  console.log("uid : ",uid);
connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.get("/user",function(req,res){
  var id = req.query.id;
  console.log("req.query : ",req.query);
  console.log("uid : ",id);
  connection.query('SELECT * from user WHERE id = ?',id, function(err, rows, fields) {
  connection.end();
  if (!err){
    console.log('The solution is: ', rows);
    res.send('You found: ' + rows[0].fname);
  } else
    console.log('Error while performing Query.');
  });
});

app.listen(8080);
