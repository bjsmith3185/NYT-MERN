const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const nytAPI = require("../../NYT-API/nyt-ajax");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  // .post(articlesController.create);
  .post(function(data) {
    console.log(data);
  })
  // .post(nytAPI)
 

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
