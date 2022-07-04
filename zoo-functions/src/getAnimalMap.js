const data = require('../data/zoo_data');

const { species } = data;

const searchAnimalBySpecie = () => species.reduce((acc, specie) => {
  switch (specie.location) {
  case 'NE':
    acc.NE.push(specie.name);
    break;
  case 'NW':
    acc.NW.push(specie.name);
    break;
  case 'SE':
    acc.SE.push(specie.name);
    break;
  default:
    acc.SW.push(specie.name);
    break;
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalByName = () => species.reduce((acc, { name, residents, location }) => {
  switch (location) {
  case 'NE':
    acc.NE.push({ [name]: residents.map((item) => item.name) });
    break;
  case 'NW':
    acc.NW.push({ [name]: residents.map((item) => item.name) });
    break;
  case 'SE':
    acc.SE.push({ [name]: residents.map((item) => item.name) });
    break;
  default:
    acc.SW.push({ [name]: residents.map((item) => item.name) });
    break;
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalBySex = (sex) => species.reduce((acc, { name, residents, location }) => {
  const animalBySex = residents.reduce((names, resident) => {
    if (resident.sex === sex) names.push(resident.name);
    return names;
  }, []);
  switch (location) {
  case 'NE':
    acc.NE.push({ [name]: animalBySex });
    break;
  case 'NW':
    acc.NW.push({ [name]: animalBySex });
    break;
  case 'SE':
    acc.SE.push({ [name]: animalBySex });
    break;
  default:
    acc.SW.push({ [name]: animalBySex });
    break;
  } return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalByNameSort = () => species.reduce((acc, { name, residents, location }) => {
  switch (location) {
  case 'NE':
    acc.NE.push({ [name]: residents.map((item) => item.name).sort() });
    break;
  case 'NW':
    acc.NW.push({ [name]: residents.map((item) => item.name).sort() });
    break;
  case 'SE':
    acc.SE.push({ [name]: residents.map((item) => item.name).sort() });
    break;
  default:
    acc.SW.push({ [name]: residents.map((item) => item.name).sort() });
    break;
  }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const searchAnimalBySexSort = (sex) => species.reduce((acc, { name, residents, location }) => {
  const animalBySex = residents.reduce((names, resident) => {
    if (resident.sex === sex) names.push(resident.name);
    return names;
  }, []);
  switch (location) {
  case 'NE':
    acc.NE.push({ [name]: animalBySex.sort() });
    break;
  case 'NW':
    acc.NW.push({ [name]: animalBySex.sort() });
    break;
  case 'SE':
    acc.SE.push({ [name]: animalBySex.sort() });
    break;
  default:
    acc.SW.push({ [name]: animalBySex.sort() });
    break;
  } return acc;
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
