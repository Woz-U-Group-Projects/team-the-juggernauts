var express = require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models");

//Create an alias for models.Sequelize.Op object(The operators for Sequelize Queries)
const Op = models.Sequelize.Op;

/* GET home page. */
router.get("/", function (req, res, next) {
  models.Fruit.findAll().then(fruits => res.json(fruits));
});

router.get("/search/:name", function (req, res, next) {
  let searchName = req.params.name;
  models.Fruit.findAll({
    where: {
      name: { [Op.like]: ['%' + searchName + '%'] }
    }
  }).then(fruits => res.json(fruits));
});

router.get("/id/:id", function (req, res, next) {
  let fruitId = parseInt(req.params.id);
  models.Fruit.findOne({
    where: {
      id: fruitId
    }
  })
    .then(fruits => {
      res.json(fruits)
    });
});

router.delete("/:id", function (req, res, next) {
  let deleteId = parseInt(req.params.id);
  models.Fruit.destroy({
    where: {
      id: deleteId
    }
  })
    .then(response => {
      res.json({
        "id": deleteId,
        "deleted": Boolean(response)  //Will return true if delete succeeded.
      })
    });
});

router.post("/", function (req, res, next) {
  let newFruit = new models.Fruit();
  newFruit.name = req.body.name;
  newFruit.description = req.body.description;
  newFruit.save().then(fruit => res.json(fruit));
});

router.post("/edit/", function (req, res, next) {

  let newName = req.body.name;
  let fruitId = parseInt(req.body.id);

  models.Fruit.update({
    name: newName
  },{
    where: {
      id: fruitId
    }
  }).then(response => res.json(response));
});

module.exports = router;
