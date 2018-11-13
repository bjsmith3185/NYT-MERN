const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedArticleSchema = new Schema({
  headline: String,
  snippet: String,
  url: String,
  pub_date: String,
  source: String,
  articleId: String,
  image: String,
  saved: Boolean, 
  notes: String,
  date: { type: Date, default: Date.now }
});

const SavedArticles = mongoose.model("SavedArticles", savedArticleSchema);

module.exports = SavedArticles;