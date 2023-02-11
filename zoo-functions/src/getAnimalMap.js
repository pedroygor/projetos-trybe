const data = require('../data/zoo_data');

const { species } = data;

const searchAnimalBySpecie = () => species.reduce((acc, { name, location }) => {
  acc[location].push(name);
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalByName = () => species.reduce((acc, { name, residents, location }) => {
  acc[location].push({ [name]: residents.map((item) => item.name) });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalBySex = (sex) => species.reduce((acc, { name, residents, location }) => {
  const animalBySex = residents.reduce((names, resident) => {
    if (resident.sex === sex) names.push(resident.name);
    return names;
  }, []);
  acc[location].push({ [name]: animalBySex });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalByNameSort = () => species.reduce((acc, { name, residents, location }) => {
  acc[location].push({ [name]: residents.map((item) => item.name).sort() });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalBySexSort = (sex) => species.reduce((acc, { name, residents, location }) => {
  const animalBySex = residents.reduce((names, resident) => {
    if (resident.sex === sex) names.push(resident.name);
    return names;
  }, []);
  acc[location].push({ [name]: animalBySex.sort() });
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function includeNamesTrue(options) {
  if (Object.keys(options).length > 2) {
    return searchAnimalBySexSort(options.sex);
  }
  if (Object.keys(options).includes('sex')) {
    return searchAnimalBySex(options.sex);
  }
  if (Object.keys(options).includes('sorted')) {
    return searchAnimalByNameSort();
  }
  return searchAnimalByName();
}
function getAnimalMap(options) {
  if (!options) return searchAnimalBySpecie();
  if (Object.keys(options).includes('includeNames')) {
    return includeNamesTrue(options);
  }
  return searchAnimalBySpecie();
}

module.exports = getAnimalMap;
