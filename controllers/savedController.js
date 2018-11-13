const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAllSaved: function(req, res) {
    db.SavedArticles
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdSaved: function(req, res) {
    db.SavedArticles
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   console.log("this is in databaseController, req")
  //   console.log(req.body)
  //   db.SavedArticles
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  createSaved: function(req, res) {
    // console.log("this is in databaseController, req")
    // console.log(req)
    db.SavedArticles
      .create(req)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
 

  updateSaved: function(req, res) {
    db.SavedArticles
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeSaved: function(req, res) {
    db.SavedArticles
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
