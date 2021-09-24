var express = require('express');
var router = express.Router();
var db = require('../connection')
var ObjectId = require('mongodb').ObjectId
/* GET home page. */
router.get('/', async function(req, res) {
    var lyrics = await db.get().collection('lyrics').find().toArray()
    res.render('index');
});

router.get('/add-lyrics', function(req, res) {
    res.render('add-lyrics');
});

router.get('/lyrics',async function(req, res) {
    var lyrics = await db.get().collection('lyrics').find().toArray()
    res.render('lyrics' , {lyrics});
});


router.get('/lyrica/:id',async function(req, res) {
    var id = req.params.id
    var lyrica = await db.get().collection('lyrics').findOne({_id:ObjectId(id)})
    res.render('lyrica',{lyrica});
});

router.post('/add-lyrics', function(req, res) {
    var link = req.body.link
    var newlink = link.replace("https://youtu.be/", "");
    req.body.link = newlink
    db.get().collection('lyrics').insertOne(req.body)
    res.redirect('/')
});

module.exports = router;
