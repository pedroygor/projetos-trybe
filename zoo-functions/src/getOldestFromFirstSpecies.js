const data = require('../data/zoo_data');

const { species, employees } = data;

function getPerson(id) {
  return employees.find((item) => item.id === id).responsibleFor[0];
}

function getOldestFromFirstSpecies(id) {
  const animal = getPerson(id);
  const oldestAnimal = species
    .find((item) => animal === item.id).residents
    .reduce((acc, current) => (current.age > acc.age ? current : acc));
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;
