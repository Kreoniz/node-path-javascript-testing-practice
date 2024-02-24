import calculator from './calculator';

test('Check if all the methods are defined', () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.divide).toBeDefined();
  expect(calculator.multiply).toBeDefined();
});

test('Test addition', () => {
  expect(calculator.add(57, 82)).toEqual(139);
});

test('Test subtraction', () => {
  expect(calculator.subtract(57, 82)).toEqual(-25);
});

test('Test division', () => {
  expect(calculator.divide(81, 3)).toEqual(27);
});

test('Test fractional division', () => {
  expect(calculator.divide(1, 3)).toBeCloseTo(0.333);
});

test('Test division by zero', () => {
  expect(calculator.divide(100, 0)).toBeUndefined();
});

test('Test multiplication', () => {
  expect(calculator.multiply(101, 20)).toEqual(2020);
});

test('Test multiplication', () => {
  expect(calculator.multiply(101, 20)).toEqual(2020);
});
