const router = require("express").Router();
<<<<<<< HEAD
const apiRoutes = require("./routes");

// Book routes
router.use(apiRoutes);
=======
const bookRoutes = require("./books");

// Book routes
router.use("/books", bookRoutes);
>>>>>>> 39db80ddeeee463d7d6735e8a0143bc8d939549d

module.exports = router;
