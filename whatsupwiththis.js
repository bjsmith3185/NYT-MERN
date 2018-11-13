// the router.get() is reaching out to another folder
// containing databaseController.js


// this is the router
router.get("/api", function (req, res) {
    databaseController.findAll(req.body)
        .then(res.json(dbModel));
  
})


// this is databaseContoller.js
module.exports = {
    findAll: function (req, res) {
        db.Articles
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};


// the question is:
//   do i need a res.json("whatever") from the
//    db.Articles.find()
//    and
//   res.json("whatever") on the 
//   databaseController.findAll() ?

//  i am not having luck getting anything back
//   to the dom when i tried to seperate the
//   router and the databaseController
