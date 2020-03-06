const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();
var mainDb = new sqlite.Database("./private/main.db");
// use res.render to load up an ejs view file

var kdata = {name: "yourname", icon: "icon", description: "none set", money: 1000, troops: 100, population: 1000}

router.get('/', function(req, res) {
  res.render("pages/game", {
    kingdom: kdata
  });
});

module.exports = router
