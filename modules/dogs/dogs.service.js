const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  dogs: new Queue(),
};

store.dogs.forEach((cat) => pets.dogs.enqueue(cat));

// --------------------

module.exports = {
  get() {
    return pets.dogs.show();
  },
};
