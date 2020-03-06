var express = require('express');
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var ejs = require('ejs');
//middleware includes
var home = require("./routes/home");
var game = require("./routes/game")
var userIds = [];

app.enable('verbose errors');
require('events').EventEmitter.defaultMaxListeners = 0;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', home);
app.use('/game', game);

//io connection when the user connects to the /game route
io.of("/game").on('connection', function (socket) {
  //add user to the array list
  userIds.push(socket.id);
  console.log('join');

  socket.on('createKingdom', function(name, icon, posX, posY) {
    console.log(`Name: ${name}\nIcon:${icon}\nposX: ${posX}\nposY: ${posY}`);
  });

  socket.on('disconnect', async function(){

    console.log('leave');
    //remove user from id array
    //run async to save cpu cycles on the main thread.
    let arrayPosition = await userIds.indexOf(socket.id);
    userIds.splice(arrayPosition, 1);
  });

});


/*
==================
ERROR HANDLING DO NOT PUT ANYTHING BELOW THIS CODE
==================
*/

// Handle 404
app.use(function(req, res) {
  res.status(404).send('404: Page not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500).send('500: Internal Server Error');
});

server.listen(8000);
