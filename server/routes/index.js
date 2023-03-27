var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send("hello");
// });

// get drink page
const drinkAPI = require("./drink.api.js")
router.use("/drink", drinkAPI)

module.exports = router;
