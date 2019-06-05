var express = require('express');
var router = express.Router();
var models = require("../models");
// var Sequelize = require('sequelize');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  let newUser = new models.users();
  // newUser.users_id=0;
  newUser.owner_first_name = req.body.name;
  newUser.owner_last_name = "";
  newUser.pets_name="";
  newUser.fav_toy="";
  newUser.breed = "";
  newUser.hometown = "";
  newUser.fav_place = "";
  newUser.save().then(User => res.json(user)).catch(err=> console.log(err));
  //models.users.create(req.body).then(user => res.json(user)).catch(error => console.log(error));
});

module.exports = router;
