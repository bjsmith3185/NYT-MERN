

// CLIENT IN REACT 

getArticles: function() {
    axios.get("/")
    .then(data => {
      console.log(data)
    })
 },




 // SERVER 

 router.get("/", function(req, res) {
    console.log("inside the get(all)")
    
      db.Articles.find({})
      .then(function(dbArticle) {
        console.log("getting all from db")
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
       
    })
