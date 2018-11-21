const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Articles collection and inserts the Articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytArticles"
);

const articleSeed = [
  {
    "_id" : ObjectId("5bf48d293f5a56223c33bd9b"),
    "saved" : false,
    "headline" : "Trump Persuaded Struggling People to Invest in Scams, Lawsuit Says",
    "snippet" : "A new suit filed in Manhattan accuses the president and some of his children of using the Trump name to entice people to invest in get-rich-quick schemes.",
    "url" : "https://www.nytimes.com/2018/10/29/nyregion/trump-acn-lawsuit.html",
    "pub_date" : "2018-10-29T16:20:56+0000",
    "source" : "The New York Times",
    "articleId" : "5bd73378068401528a2e2b20",
    "image" : "images/2018/10/30/nyregion/30trumpsuit3/30trumpsuit3-articleLarge.jpg",
    "date" : ISODate("2018-11-20T22:39:37.549Z"),
    "__v" : 0
},
{
    "_id" : ObjectId("5bf48d293f5a56223c33bd9c"),
    "saved" : false,
    "headline" : "Trump and Women: Another Writer Looks for Answers",
    "snippet" : "“Golden Handcuffs: The Secret History of Trump’s Women” traces how the president’s consequence-free (so far) comments about women continue a running theme that started early in his life.",
    "url" : "https://www.nytimes.com/2018/10/19/us/politics/golden-handcuffs-book-trump-women.html",
    "pub_date" : "2018-10-20T00:32:30+0000",
    "source" : "The New York Times",
    "articleId" : "5bca77a0068401528a2e12e2",
    "image" : "images/2018/10/20/us/politics/20dc-trumpwomen/merlin_145489149_6a382279-3f13-46ec-82fd-a55d93102c60-articleLarge.jpg",
    "date" : ISODate("2018-11-20T22:39:37.552Z"),
    "__v" : 0
},
{
    "_id" : ObjectId("5bf48d293f5a56223c33bd9d"),
    "saved" : false,
    "headline" : "Trump’s Corruption: The Definitive List",
    "snippet" : "The many ways that the president, his family and his aides are lining their own pockets.",
    "url" : "https://www.nytimes.com/2018/10/28/opinion/trump-administration-corruption-conflicts.html",
    "pub_date" : "2018-10-28T23:01:41+0000",
    "source" : "The New York Times",
    "articleId" : "5bd63fd7068401528a2e2917",
    "image" : "images/2018/10/26/opinion/00leon11/merlin_145741011_664bb4d4-643e-41db-b432-92395e1f0e7a-articleLarge.jpg",
    "date" : ISODate("2018-11-20T22:39:37.552Z"),
    "__v" : 0
},
{
    "_id" : ObjectId("5bf48d293f5a56223c33bd9e"),
    "saved" : false,
    "headline" : "China Grants Ivanka Trump Initial Approval for New Trademarks",
    "snippet" : "The 16 new trademarks cover a broad array of goods and services, including purses, swimsuits, fire extinguishers and senior citizens’ homes.",
    "url" : "https://www.nytimes.com/2018/11/06/business/china-ivanka-trump-trademarks.html",
    "pub_date" : "2018-11-06T10:35:05+0000",
    "source" : "The New York Times",
    "articleId" : "5be16e5b3a125f5075bf8cf3",
    "image" : "images/2018/11/07/world/07chinaivanka/merlin_136617204_9cf434d2-f2f7-4b96-90cb-6e7f5f64cab7-articleLarge.jpg",
    "date" : ISODate("2018-11-20T22:39:37.552Z"),
    "__v" : 0
},
{
    "_id" : ObjectId("5bf48d293f5a56223c33bd9f"),
    "saved" : false,
    "headline" : "Liberal Upper West Siders Get Their Revenge: Trump Place Sign Comes Down",
    "snippet" : "Tenants at 200 Riverside Boulevard voted to remove the Trump brand from their building’s signage. A judge sided with their decision.",
    "url" : "https://www.nytimes.com/2018/10/17/nyregion/trump-place-sign-condo-manhattan.html",
    "pub_date" : "2018-10-17T20:58:44+0000",
    "source" : "The New York Times",
    "articleId" : "5bc7a288068401528a2e0b9e",
    "image" : "images/2018/10/19/nyregion/19trumpsign01/19trumpsign01-articleLarge.jpg",
    "date" : ISODate("2018-11-20T22:39:37.553Z"),
    "__v" : 0
}
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
