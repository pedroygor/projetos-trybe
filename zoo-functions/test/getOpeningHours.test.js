const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Monday e 09:00-AM deve retornar a string \'The zoo is closed\'', () => {
    const atual1 = getOpeningHours('Monday', '09:00-AM');
    const expected1 = 'The zoo is closed';

    const atual2 = getOpeningHours('Wednesday', '09:00-PM');
    const expected2 = 'The zoo is closed';

    expect(atual1).toEqual(expected1);
    expect(atual2).toEqual(expected2);
  });
  it('expected "The zoo is closed"', () => {
    const atual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';

    expect(atual).toEqual(expected);
  });
  it('not param expected full object', () => {
    const atual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };

    expect(atual).toMatchObject(expected);
  });
  it('if param is not valid', () => {
    const expected1 = 'The day must be valid. Example: Monday';
    const expected2 = 'The abbreviation must be \'AM\' or \'PM\'';
    const expected3 = 'The hour should represent a number';
    const expected4 = 'The minutes should represent a number';
    const expected5 = 'The hour must be between 0 and 12';
    const expected6 = 'The minutes must be between 0 and 59';

    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrowError(new Error(expected1));
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error(expected2));
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrowError(new Error(expected3));
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error(expected4));
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrowError(new Error(expected5));
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrowError(new Error(expected6));
  });
});
