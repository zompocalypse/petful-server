const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));

// --------------------

module.exports = {
  get() {
    return pets.cats.show();
  },
};
