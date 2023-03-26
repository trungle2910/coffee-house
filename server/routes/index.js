var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const  data ={
    name: "Trung",
    action: "Hello world"
  }
  res.status(200).json(data);
});

module.exports = router;
