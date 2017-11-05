const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes")
const mongoose = require ("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
//app.use(express.static("client/build"));

app.use(routes);

mongoose.Promise = global.Promise;
///Data base connection

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
