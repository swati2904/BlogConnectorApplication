const express = require("express");
const router = express.Router();

// @route              GET api/auth
// @description        Test route
// @acess              Public/Private

router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;
