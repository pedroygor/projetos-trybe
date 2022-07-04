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
  const objEntrant = countEntrants(entrants);
  const result = (objEntrant.child * prices.child) + (objEntrant.adult * prices.adult)
  + (objEntrant.senior * prices.senior);
  return result;
}

module.exports = { calculateEntry, countEntrants };
