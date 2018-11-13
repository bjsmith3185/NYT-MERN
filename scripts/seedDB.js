const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the Articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytArticles"
);

const articleSeed = [
  {
    search: "The trumpster",
    start: 3,
    end: 4,
    qty: 1,
    date: new Date(Date.now())
  },
  {
    search: "The whyner",
    start: 3,
    end: 4,
    qty: 1,
    date: new Date(Date.now())
  },
];

db.Articles
  .remove({})
  .then(() => db.Articles.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
