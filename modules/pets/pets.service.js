const Queue = require('../queue/Queue');
const store = require('../../store');
const { cats } = require('../../store');

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    const objOfArrays = {};
    objOfArrays.cats = pets.cats.all();
    objOfArrays.dogs = pets.dogs.all();

    return objOfArrays;
  },

  getByType(typeOfPet) {
    if (typeOfPet === 'cat') return pets.cats.show();
    if (typeOfPet === 'dog') return pets.dogs.show();
  },

  dequeue(type) {
    pets[`${type}s`].dequeue();
  },
};
