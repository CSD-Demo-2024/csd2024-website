var express = require('express');
var router = express.Router();

const generateIdEndpoint = `${process.env.BACKEND_URL}/id/generate`

/* GET home page. */
router.get('/', function(req, res, next) {
  import('node-fetch').then(({default: fetch}) => {
    fetch(generateIdEndpoint)
    .then(res => res.text())
    .then(id => res.render('index', { generatedId: id }));
  });
});

module.exports = router;
