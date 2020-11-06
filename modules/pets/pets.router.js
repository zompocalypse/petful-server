const express = require('express');

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(Pets.get());
});

router
  .route('/:type')
  .get((req, res) => {
    res.json(Pets.getByType(req.params.type));
  })
  .delete((req, res) => {
    Pets.dequeue(req.params.type);
    People.dequeue();

    res.set(204).end();
  });

module.exports = router;
