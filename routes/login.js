var express = require('express');
var router = express.Router();
var models = require("../models");

router.get('/login', function (req, res, next) {
    res.render('login');
});

// Login form route

router.post('/login', function (req, res, next) {
    models.users
        .findOne({
            where: {
                Email_User_Name: req.body.ename,
                Password: req.body.passname
            }
        }).then(user => {
            if (user) {
                res.send('Login succeeded');
            } else {
                res.send('Invalid login')
            }
        })
});


module.exports = router;