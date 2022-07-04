const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const name = employees
    .find(({ firstName, lastName }) => {
      const firstOrLastName = firstName === employeeName || lastName === employeeName;
      return firstOrLastName;
    });
  return employeeName !== undefined ? name : {};
}

module.exports = getEmployeeByName;
