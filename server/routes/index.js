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
const tableAPI = require("./table.api.js")
router.use("/table",tableAPI)
//order
const orderAPI = require('./order.api.js')
router.use('/order', orderAPI)
module.exports = router;
