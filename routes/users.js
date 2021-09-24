var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('admin');
});

router.get('/deletAll', function(req, res) {
  db.get().collection('lyrics').remove()
  res.redirect('/');
});

module.exports = router;
