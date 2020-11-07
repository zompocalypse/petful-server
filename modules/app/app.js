const express = require('express');
const cors = require('cors');

const { CLIENT_ORIGIN } = require('../../config');

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN,
  })
);

app.use('/api/people', require('../people/people.router'));
app.use('/api/pets', require('../pets/pets.router'));
app.use('/api/cat', require('../cats/cats.router'));
app.use('/api/dog', require('../dogs/dogs.router'));

module.exports = app;
