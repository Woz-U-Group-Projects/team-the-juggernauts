var express = require('express');
var router = express.Router();
var models = require("../models");
// var Sequelize = require('sequelize');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newUser = new models.Users();
  newUser.name = req.body.name;
  newUser.save().then(User => res.json(user));
});

module.exports = router;
