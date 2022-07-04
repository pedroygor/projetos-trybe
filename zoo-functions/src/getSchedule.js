const data = require('../data/zoo_data');

const { species, hours } = data;

function getAnimal(scheduleTarget) {
  return species.find((specie) => specie.name === scheduleTarget).availability;
}

function getWeek(scheduleTarget) {
  const hora = hours[scheduleTarget];
  if (hora.open === 0 && hora.close === 0) {
    return { [scheduleTarget]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  let exi = [];
  exi = species.reduce((acc, current) => {
    if (current.availability.includes(scheduleTarget)) {
      acc.push(current.name);
    }
    return acc;
  }, []);
  const off = `Open from ${hora.open}am until ${hora.close}pm`;
  return { [scheduleTarget]: { officeHour: off, exhibition: exi } };
}

function getEmptyWeek() {
  const obj = {};
  Object.keys(hours).forEach((dia) => {
    if (dia === 'Monday') {
      obj[dia] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      obj[dia] = {
        officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
        exhibition: species.reduce((acc, current) => {
          if (current.availability.includes(dia)) {
            acc.push(current.name);
          }
          return acc;
        }, []),
      };
    }
  });
  return obj;
}

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return getEmptyWeek();
  } if (species.some((item) => item.name === scheduleTarget)) {
    return getAnimal(scheduleTarget);
  } if (Object.keys(hours).includes(scheduleTarget)) {
    return getWeek(scheduleTarget);
  }
  return getEmptyWeek();
}

module.exports = getSchedule;
