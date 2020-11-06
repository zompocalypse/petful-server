const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(People.get());
});

router.post('/', json, (req, res) => {
  const { name } = req.body;
  const person = name;

  People.enqueue(person);

  res.set(201).json(person);
});

module.exports = router;
