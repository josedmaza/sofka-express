var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jose Daniel Maza arnedoo' });
});

console.log("Listening on port 3000")



module.exports = router;
