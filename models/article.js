const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: String,
  snippet: String,
  url: String,
  pub_date: String,
  source: String,
  articleId: String,
  image: String,
  saved: {type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;
