const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some(({ managers }) => managers.some((item) => item === id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acumulador, atual) => {
    if (isManager(atual.id) && atual.id !== managerId) {
      acumulador.push(`${atual.firstName} ${atual.lastName}`);
    }
    return acumulador;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
