const data = require('../data/zoo_data');

const { employees, species } = data;

function getInformationByEmployee(obj) {
  return employees
    .find(({ id, firstName, lastName }) => (firstName === obj.name
    || lastName === obj.name || id === obj.id));
}

function showObject(obj) {
  const information = getInformationByEmployee(obj);
  const { id, firstName, lastName } = information;
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: species.reduce((acc, current) => {
      if (information.responsibleFor.includes(current.id)) {
        acc.push(current.name);
      }
      return acc;
    }, []),
    locations: species.reduce((acc, current) => {
      if (information.responsibleFor.includes(current.id)) {
        acc.push(current.location);
      }
      return acc;
    }, []),
  };
}
function showAllEmployees() {
  return employees.reduce((acc, current) => acc
    .concat(showObject(current)), []);
}
function getEmployeesCoverage(obj) {
  if (!obj) {
    return showAllEmployees();
  }
  if (Object.keys(obj).length > 0) {
    const objeto = getInformationByEmployee(obj);
    if (!objeto) {
      throw new Error('Informações inválidas');
    }
    return showObject(objeto);
  }
}

module.exports = getEmployeesCoverage;
