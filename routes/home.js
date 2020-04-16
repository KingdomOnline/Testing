const express = require('express');
const router = express.Router();
// use res.render to load up an ejs view file

router.get('/', function(req, res) {
  res.render("pages/index");
});

router.get('/test', function(req, res) {
  res.send("hello");
})

router.get('/profile', function(req, res) {
  res.render("pages/profile");
})

module.exports = router
