const router = require("express").Router();
const articleRoutes = require("./Article");

// Book routes
router.use("/saved", articleRoutes);

module.exports = router;