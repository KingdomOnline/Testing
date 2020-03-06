const express = require('express');
const router = express.Router();
const sqlite = require('sqlite3').verbose();
var mainDb = new sqlite.Database("./private/main.db");
// use res.render to load up an ejs view file
var pointData = {
  "kingdoms": [
    {name: "test", posX: 100, posY: 240, icon: "this icon", population: 100000, troops: 1000, forts: 10},
    {name: "test1", posX: 500, posY: 340, icon: "this icon", population: 100000, troops: 1000, forts: 10},
    {name: "test2", posX: 400, posY: 140, icon: "this icon", population: 100000, troops: 1000, forts: 10}
  ]
};

router.get('/', function(req, res) {
  res.render("pages/map", {
    mapImage: "data",
    points: JSON.stringify(pointData)
  })
});

module.exports = router
