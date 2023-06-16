import calculate from './calculate';

describe('calculate', () => {
  it('resets the calculator object when AC button is pressed', () => {
    const obj = { total: '3', next: '2', operation: '+' };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: null, operation: null });
  });
});
