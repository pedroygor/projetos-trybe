const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species
    .filter(({ name }) => name === animal)
    .every((item) => !item.residents
      .some((ele) => age >= ele.age));
}

module.exports = getAnimalsOlderThan;
