"use strict";

const {MongoClient} = require("mongodb")
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

let db;

MongoClient.connect(MONGODB_URI, (err, instance) => {
  if (err) throw err;
  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  db = instance;
  // ==> In typical node-callback style, any program
  //     logic that needs to use the connection needs
  //     to be invoked from within here.
  //
  // Another way to say: this is an "entry point" for
  // a database-connected application!
  // ==> Let's "get all the tweets". In Mongo-speak, we "find" them.
  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback)
  }

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

  // ==> At the end, we close the connection:
  });
});