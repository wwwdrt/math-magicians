import operate from './operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  it('multiplies two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  it('finds the modulo of two numbers', () => {
    expect(operate(10, 3, '%')).toBe('1');
  });

  it('throws an error for unknown operations', () => {
    expect(() => operate(10, 3, '^')).toThrowError(new Error("Unknown operation '^'"));
  });

  it('handles division by zero', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('handles modulo by zero', () => {
    expect(operate(10, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
