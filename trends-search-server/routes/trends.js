const express = require('express');
const router = express.Router();
const trendsController = require('../controllers/trends');

/* GET home page. */
router.get('/', function (req, res, next) {
  trendsController.getTrends().then(
    result => res.status(200).json(result),
    err => err
  )
});

module.exports = router;
