var express = require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models");

//Create an alias for models.Sequelize.Op object(The operators for Sequelize Queries)
const Op = models.Sequelize.Op;

module.exports = router;