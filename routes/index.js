const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const API = require("../NYT-API/nyt-ajax");
const articlesController = require("../controllers/articlesController");

const db = require("../models");

// Routes to the databaseController
// and to the NYT API

router.get("/api", function(req, res) {
console.log("inside the get(all)")


// res.json(databaseController.findAll())
// res.json()
  // .then(res.json(dbModel));
  // // .then(res.json())

  db.Articles.find({})
  .then(function(dbArticle) {
    console.log("dbArticles.find({})")
    // If we were able to successfully find Articles, send them back to the client
    res.json(dbArticle);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  });
})


// this route will save an article to the saved collection
router.post("/api/save", function(req, res) {
  // articlesController.findById(req.body);
  console.log("this is inside the post for saved article")
  console.log(req.body);
  console.log(typeof(req))
  
  db.SavedArticles.create(req.body)
  .then(function(dbArticle) {
    console.log("this is the res.json from savedArticles.create")
    // If we were able to successfully find Articles, send them back to the client
    res.json(dbArticle);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  })

})


router.get("/api/save/all", function(req, res) {
  console.log("this is inside get/saved");
    db.SavedArticles.find({})
    .then(function(dbSaved) {
      console.log("this is the [] of saved articles");
      res.json(dbSaved)
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    })
})

router.post("/api/save/delete/:id", function(req, res) {
  console.log("this is the id to remove: " + req.params.id)
  db.SavedArticles
  .findById({ _id: req.params.id })
  .then(dbModel => dbModel.remove())
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));

})



router.post("/api/articles", function(req, res) {
  console.log("this is inside update article");
  console.log(req.body.data.articleId);
  // console.log(`${articleId}: ${req.body.data.articleId}`)

  db.Articles
  .findOneAndUpdate({ articleId: req.body.data.articleId }, 
                    { $set: { saved: true } })
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
      // console.log("this is the NYTAPI response")
      // console.log(response)
      for(var i = 0; i < response.length; i++) {
        articlesController.create(response[i]);
      }
    });
    res.json();
    // API from nyt works here.


})


router.get("/api/articles/:id", function(req, res) {
  articlesController.findById(req.body)
})


router.get("/api/articles/:id", function(req, res) {
  articlesController.update(req.body)
})

router.get("/api/articles/:id", function(req, res) {
  articlesController.remove(req.body)
})












// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
