var express = require('express');
var router = express.Router();
var models = require("../models");
// var Sequelize = require('sequelize');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


// Users form route

router.post("/", function (req, res, next) {
  console.log(req.body);
  let newUser = new models.users();
  newUser.users_id = 0;
  newUser.owner_first_name = req.body.name;
  newUser.owner_last_name = req.body.lname;
  newUser.Email_User_Name = req.body.ename;
  // newUser.user_name = req.body.uname;
  newUser.Password = req.body.passname;
  newUser.pets_name = req.body.pname;
  newUser.fav_toy = req.body.tname;
  newUser.breed = req.body.bname;
  newUser.hometown = req.body.twname;
  newUser.fav_place = req.body.ppname;
  newUser.save().then(user => res.json(user)).catch(err => console.log(err));
  //models.users.create(req.body).then(user => res.json(user)).catch(error => console.log(error));
});

// .spread(function(result, created) {
//   if (created) {
//     res.redirect('login');  //<---Change this line to redirect to the login screen
//   } else {
//     res.send('This user already exists');
//   }
// });


module.exports = router;
