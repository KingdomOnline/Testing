const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();
var mainDb = new sqlite.Database("./private/main.db");
// use res.render to load up an ejs view file

router.get('/', function(req, res) {
  res.render("pages/index");
});

router.get('/test', function(req, res) {
  res.send("hello");
})

module.exports = router
