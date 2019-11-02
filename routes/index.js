var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/catalog');
});

/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/users/cool/', function(req, res, next) {
  res.render('index', { title: "You're so cool", message: "As, i am so cool" } );
});


//app.use('catalog/',router);

module.exports = router;
