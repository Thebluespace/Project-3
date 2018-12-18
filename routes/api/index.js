const router = require("express").Router();
const apiRoutes = require("./apiroutes.js");

// Book routes
router.use(apiRoutes);

module.exports = router;
