const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Pets.get());
});

router.get('/:type', (req, res) => {
  res.json(Pets.getByType(req.params.type));
});

router.delete('/', json, (req, res) => {
  const { type } = req.body;
  const typeOfPet = type;

  Pets.dequeue(typeOfPet);
  People.dequeue();

  res.set(204).end();
});

module.exports = router;
