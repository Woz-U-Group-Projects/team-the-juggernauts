var express = require('express');
var router = express.Router();
var users = require('../models/users')
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Password1!',
  database: 'furrbabies'
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Yay! You are connected to the database!');
})

/* GET home page. */
router.get('/person/:id', function(req, res, next) {
  //get object that matches the id
  let person = users.people.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  // render the template with that object
  res.render('index', { person });
  console.log(req.url);
});



module.exports = router;
