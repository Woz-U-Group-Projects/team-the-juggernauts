var express = require("express");
var router = express.Router();
const sqlite = require("sqlite3").verbose();
var models = require("../models");

//Create an alias for models.Sequelize.Op object(The operators for Sequelize Queries)
const Op = models.Sequelize.Op;

/* GET home page. */
router.get("/", function (req, res, next) {
  models.Post.findAll().then(posts => res.json(posts));
});

router.get("/search/:name", function (req, res, next) {
  let searchName = req.params.name;
  models.Post.findAll({
    where: {
      name: { [Op.like]: ['%' + searchName + '%'] }
    }
  }).then(posts => res.json(posts));
});

router.get("/post_id/:post_id", function (req, res, next) {
  let postId = parseInt(req.params.post_id);
  models.Post.findOne({
    where: {
      post_id: postId
    }
  })
    .then(posts => {
      res.json(posts)
    });
});

router.delete("/:post_id", function (req, res, next) {
  let deleteId = parseInt(req.params.post_id);
  models.Post.destroy({
    where: {
      post_id: deleteId
    }
  })
    .then(response => {
      res.json({
        "post_id": deleteId,
        "deleted": Boolean(response)  //Will return true if delete succeeded.
      })
    });
});

router.post("/", function (req, res, next) {
  let newPost = new models.Post();
  newPost.name = req.body.name;
  newPost.save().then(post => res.json(post));
});

router.post("/edit/", function (req, res, next) {

  let newName = "" + req.body.name + "";
  let postId = parseInt(req.body.post_id);

  models.Post.update({
    name: newName
  },{
    where: {
      post_id: postId
    }
  }).then(response => res.json(response));
});

module.exports = router;
