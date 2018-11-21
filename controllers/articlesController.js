const db = require("../models");

// Defining methods for the articlesController
module.exports = {


  create: function(req, res) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    // console.log("this is in databaseController, req")
    // console.log(req)
    db.Articles
      .create(req)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },



  // findAll: function(req, res) {

  //   // return (
  //     db.Articles
  //     .find({})
  //     // .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     // .then(dbModel => {return dbModel})
  //     // .catch(err => res.status(422).json(err));

  //       .then(function (dbArticle) {
  //     return res.json(dbArticle);
  //   })
  //   // )
    
  // },




  // findById: function(req, res) {
  //   db.Articles
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // // create: function(req, res) {
  // //   console.log("this is in databaseController, req")
  // //   console.log(req.body)
  // //   db.Articles
  // //     .create(req.body)
  // //     .then(dbModel => res.json(dbModel))
  // //     .catch(err => res.status(422).json(err));
  // // },

 
 

  // update: function(req, res) {
  //   db.Articles
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Articles
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
