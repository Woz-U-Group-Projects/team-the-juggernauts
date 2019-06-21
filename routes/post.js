var express = require("express");
var router = express.Router();
// const sqlite = require("sqlite3").verbose();
var models = require("../models");

//Create an alias for models.Sequelize.Op object (The operators for Sequelize Queries)
const Op = models.Sequelize.Op;

//Get all posts. Returns JSON. Accessible thru http://localhost:5000/posts
router.get("/", function (req, res, next) {
  models.Post.findAll().then(posts => res.json(posts));
});

//Get one post by id.
router.get("/id/:id", function (req, res, next) {
  let postId = parseInt(req.params.id);
  models.Post.findOne({
    where: {
      id: postId
    }
  })
    .then(posts => {
      res.json(posts)
    });
});

//Add a post.
router.post("/", function (req, res, next) {
  let newPost = new models.Post();
  newPost.pet_id = req.body.pet_id;
  newPost.post_body = req.body.post_body;
  newPost.img_url = req.body.img_url;
  newPost.link_url = req.body.link_url;
  newPost.save().then(post => res.json(post));
});

//Edit a post.
router.post("/edit/", function (req, res, next) {

  let postId = parseInt(req.body.id);

  let newPetId = parseInt(req.body.pet_id);
  let newPostBody = req.body.post_body;
  let newImgUrl = req.body.img_url;
  let newLinkUrl = req.body.link_url;

  models.Post.update({
    pet_id: newPetId,
    post_body: newPostBody,
    img_url: newImgUrl,
    link_url: newLinkUrl
  }, {
      where: {
        id: postId
      }
    }).then(response => res.json(response));
});

//Delete a post.
router.delete("/:id", function (req, res, next) {
  let deleteId = parseInt(req.params.id);
  models.Post.destroy({
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

//Search body function.
router.get("/search-body/:name", function (req, res, next) {
  let searchName = req.params.name;
  models.Post.findAll({
    where: {
      post_body: { [Op.like]: ['%' + searchName + '%'] }
    }
  }).then(posts => res.json(posts));
});

//Search url function
router.get("/search-url/:name", function (req, res, next) {
  let searchName = req.params.name;
  models.Post.findAll({
    where: {
      link_url: { [Op.like]: ['%' + searchName + '%'] }
    }
  }).then(posts => res.json(posts));
});

//Search image url function
router.get("/search-img/:name", function (req, res, next) {
  let searchName = req.params.name;
  models.Post.findAll({
    where: {
      img_url: { [Op.like]: ['%' + searchName + '%'] }
    }
  }).then(posts => res.json(posts));
})

module.exports = router;