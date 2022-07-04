const data = require('../data/zoo_data');

const { employees, species } = data;

function getFirstName(obj) {
  return employees
    .find((employee) => (employee.firstName === obj.name
    || employee.lastName === obj.name || employee.id === obj.id));
}

function showObject(obj) {
  const teste = getFirstName(obj);
  return {
    id: teste.id,
    fullName: `${teste.firstName} ${teste.lastName}`,
    species: species.reduce((acc, current) => {
      if (teste.responsibleFor.includes(current.id)) {
        acc.push(current.name);
      }
      return acc;
    }, []),
    locations: species.reduce((acc, current) => {
      if (teste.responsibleFor.includes(current.id)) {
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
    const objeto = getFirstName(obj);
    if (!objeto) {
      throw new Error('Informações inválidas');
    }
    return showObject(objeto);
  }
}

module.exports = getEmployeesCoverage;
