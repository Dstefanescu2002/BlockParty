// MongoDB initialization
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dstefanescu1609:WvyCpwm182gU8Wt1@cluster0.dvy0g9v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("mvp-db");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },
  getDb: function () {
    return dbConnection;
  },
};