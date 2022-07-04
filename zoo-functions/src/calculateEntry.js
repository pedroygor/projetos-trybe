const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  return entrants.reduce((acc, current) => {
    if (current.age < 18) acc.child += 1;
    else if (current.age >= 18 && current.age < 50) acc.adult += 1;
    else acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const obj = countEntrants(entrants);
  let result = 0;
  result = (obj.child * prices.child) + (obj.adult * prices.adult)
  + (obj.senior * prices.senior);
  return result;
}

module.exports = { calculateEntry, countEntrants };
