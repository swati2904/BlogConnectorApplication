const express = require("express");
const router = express.Router();

// @route              GET api/posts
// @description        Test route
// @acess              Public/Private

router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;
