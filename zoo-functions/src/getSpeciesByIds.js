const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.reduce((acc, current) => {
    acc.push(...data.species.filter(({ id }) => id === current));
    return acc;
  }, []);
}

module.exports = getSpeciesByIds;
