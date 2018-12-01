const express = require("express");
//var db = require("./models");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
  app.use("/static",express.static("client/build/static"));
};
app.use(routes);
// Start the API server

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
  
// });

app.listen(PORT, function() {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",PORT,PORT);
});