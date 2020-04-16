const express = require('express');
const app = express();
const ejs = require('ejs');

//middleware includes
var home = require("./routes/home");

//mysql
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "website",
  password: "IU*(&THHGkjhgfkjg&",
  database: "kingsroyale"
}); 

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database!");
});


app.enable('verbose errors');
require('events').EventEmitter.defaultMaxListeners = 0;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', home);



/*
==================
ERROR HANDLING DO NOT PUT ANYTHING BELOW THIS CODE
==================
*/

/* 
 // Handle 404
app.use(function(req, res) {
  res.status(404).send('404: Page not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500).send('500: Internal Server Error');
});
 */

app.listen(8000);
