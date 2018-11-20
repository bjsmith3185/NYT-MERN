const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const API = require("../NYT-API/nyt-ajax");
const articlesController = require("../controllers/articlesController");

const db = require("../models");

// Routes to the databaseController
// and to the NYT API

router.get("/api", function(req, res) {

  db.Articles.find({})
  .then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function(err) {
    res.json(err);
  });
});


// this route will save an article to the saved collection
router.post("/api/save", function(req, res) {
 
  db.SavedArticles.create(req.body)
  .then(function(dbArticle) {
    res.json(dbArticle);
  })
  .catch(function(err) {
    res.json(err);
  })
});


router.get("/api/save/all", function(req, res) {
  console.log("this is inside get/saved");
    db.SavedArticles.find({})
    .then(function(dbSaved) {
      console.log("this is the [] of saved articles");
      res.json(dbSaved)
    })
    .catch(err => res.status(422).json(err));
});

router.post("/api/save/delete/:id", function(req, res) {

  db.SavedArticles
  .findById({ _id: req.params.id })
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});

router.post("/api/update/:id", function(req, res) {
 
  db.SavedArticles
  .findOneAndUpdate({_id: req.params.id }, {$set:{note: req.body.note}}, {new: true})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})




// the post route below will take in the search params
// then call the NYT api 
// then send the response to the database thru /controllers/databaseController.js
router.post("/api/articles", function (req, res) {

  console.log("this is inside the post for article search")
  // console.log(req.body);
  
  API(req.body)
    .then(function (response) {
      for(var i = 0; i < response.length; i++) {
        articlesController.create(response[i]);
      }
    });
    res.json();
    // API from nyt works here.
})


// router.get("/api/articles/:id", function(req, res) {
//   articlesController.findById(req.body)
// })


// router.get("/api/articles/:id", function(req, res) {
//   articlesController.update(req.body)
// })

// router.get("/api/articles/:id", function(req, res) {
//   articlesController.remove(req.body)
// })












// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
