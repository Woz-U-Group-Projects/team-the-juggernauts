var express = require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models");

//Create an alias for models.Sequelize.Op object (The operators for Sequelize Queries)
const Op = models.Sequelize.Op;

//Get all posts. Returns JSON. Accessible thru http://localhost:5000/posts
router.get("/", function (req, res, next) {
    models.Post.findAll().then(posts => res.json(posts));
});

module.exports = router;