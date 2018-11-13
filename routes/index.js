const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const API = require("../NYT-API/nyt-ajax");
const databaseController = require("../controllers/dataBaseController");

const db = require("../models");

// Routes to the databaseController
// and to the NYT API

router.get("/", function(req, res) {
console.log("inside the get(all)")

  db.Articles.find({})
  .then(function(dbArticle) {
    console.log("after getting all from db")
    // If we were able to successfully find Articles, send them back to the client
    res.json(dbArticle);
  })
  .catch(function(err) {
    // If an error occurred, send it to the client
    res.json(err);
  });


  // databaseController.findAll()
  // .then(res.json(result));
  // // .then(res.json())

})

router.get("/api/articles/:id", function(req, req) {
  databaseController.findById(req.body);
})


// the post route below will take in the search params
// then call the NYT api 
// then send the response to the database thru /controllers/databaseController.js
router.post("/api/articles", function (req, res) {
  // console.log("this is inside the index.js router")
  // console.log(req.body);
  
  API(req.body)
    .then(function (response) {
      console.log("this is the NYTAPI response")
      console.log(response)
      for(var i = 0; i < response.length; i++) {
        databaseController.create(response[i]);
      }
    });
    res.json();
    // API from nyt works here.


})


router.get("/api/articles/:id", function(req, res) {
  databaseController.findById(req.body)
})


router.get("/api/articles/:id", function(req, res) {
  databaseController.update(req.body)
})

router.get("/api/articles/:id", function(req, res) {
  databaseController.remove(req.body)
})












// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
