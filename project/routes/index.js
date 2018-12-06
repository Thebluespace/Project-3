const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

function isLoggedIn(req, res, next) {
  console.log(req);
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
};

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.get(isLoggedIn, function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;