var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send("hello");
// });

//  drink 
const drinkAPI = require("./drink.api.js")
router.use("/drink", drinkAPI);
// user 
const userAPI = require("./user.api.js")
router.use("/user",userAPI)
module.exports = router;
