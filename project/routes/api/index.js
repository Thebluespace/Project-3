const router = require("express").Router();
const apiRoutes = require("./routes");

// Book routes
router.use(apiRoutes);

module.exports = router;
