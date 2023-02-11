const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (!animal) {
    const result = {};
    species.forEach(({ name, residents }) => {
      result[name] = residents.length;
    });
    return result;
  }
  if (Object.keys(animal).length === 1) {
    return species.find((item) => item.name === animal.specie).residents.length;
  }
  return species.find((item) => item.name === animal.specie)
    .residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
