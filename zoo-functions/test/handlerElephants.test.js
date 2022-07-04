const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('if return is undefined', () => {
    const atual = handlerElephants();
    const expected = undefined;
    expect(atual).toEqual(expected);
  });
  it('if diference string', () => {
    const atual = handlerElephants(0);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(atual).toEqual(expected);
  });
  it('if param to equals count', () => {
    const atual1 = handlerElephants('count');
    const atual2 = handlerElephants('names');
    const atual3 = handlerElephants('averageAge');

    const expected1 = 4;
    const expected2 = 'Jefferson';
    const expected3 = 10.5;

    expect(atual1).toBe(expected1);
    expect(atual2).toContain(expected2);
    expect(atual3).toBeCloseTo(expected3);
  });
  it('if param is null', () => {
    const atual = handlerElephants('batata doce');
    expect(atual).toBeNull();
  });
  it('if param to equal popularity, location and availability', () => {
    const atual1 = handlerElephants('popularity');
    const atual2 = handlerElephants('location');
    const atual3 = handlerElephants('availability');

    const expected1 = 5;
    const expected2 = 'NW';
    const expected3 = 'Monday';

    expect(atual1).toBeGreaterThanOrEqual(expected1);
    expect(atual2).toEqual(expected2);
    expect(atual3).not.toContain(expected3);
  });
});
