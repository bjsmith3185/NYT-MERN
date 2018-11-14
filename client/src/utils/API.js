import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api");
  },

  // getArticles: function() {
  //    axios.get("/")
  //    .then(data => {
  //      console.log(data)
  //      return data;
  //    })
  // },

  

  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // adds searches to the database
  findArticle: function(articleData) {
    console.log("Client API: findArtile()")
    console.log(articleData)
    return axios.post("/api/articles", articleData);
  },

    // Saves a article to the database
  saveArticle: function(articleData) {
    console.log("Client API: saveArticle()")
    console.log(articleData)
    // console.log("/api/articles/save/"+ articleData.articleId)
    return axios.post("/api/save", articleData);
  },

  getSavedArticles: function() {
    return axios.get("/api/save/all");
  },

  removeArticle: function(id) {
    console.log("this is the id to remove: " + id);
    return axios.post("/api/save/delete/" + id);
  }
};
