const express = require('express');
const Cats = require('./cats.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Cats.get());
});

module.exports = router;
