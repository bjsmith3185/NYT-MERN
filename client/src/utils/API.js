import axios from "axios";

export default {
  // Gets all articles
  getArticles: function () {
    return axios.get("/api");
  },

  // Gets the article with the given id
  getArticle: function (id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // adds searches to the database
  findArticle: function (articleData) {
    return axios.post("/api/articles", articleData);
  },

  // Saves a article to the database
  saveArticle: function (articleData) {
    return axios.post("/api/save", articleData);
  },

  getSavedArticles: function () {
    return axios.get("/api/save/all");
  },

  removeArticle: function (id) {
    return axios.post("/api/save/delete/" + id);
  },

  updateSavedArticle: function (id, data) {
    return axios.post("/api/update/" + id, data);
  },

};
