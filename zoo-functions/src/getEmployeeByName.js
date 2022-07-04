const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const result = employees
    .find((employee) => {
      const firstOrLastName = employee.firstName === employeeName
      || employee.lastName === employeeName;
      return firstOrLastName;
    });
  return employeeName !== undefined ? result : {};
}

module.exports = getEmployeeByName;
