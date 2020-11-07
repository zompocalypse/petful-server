const express = require('express');
const Dogs = require('./dogs.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Dogs.get());
});

module.exports = router;
