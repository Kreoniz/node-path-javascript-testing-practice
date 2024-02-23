import { analyzeArray } from './analyzeArray';

const testArray = [1, 9999, 23, -99991, 352, 124, 3];

test('Check if all properties are available', () => {
  const analyzedArray = analyzeArray(testArray);
  expect(analyzedArray['average']).toBeDefined();
  expect(analyzedArray['min']).toBeDefined();
  expect(analyzedArray['max']).toBeDefined();
  expect(analyzedArray['length']).toBeDefined();
});

test('Test length', () => {
  expect(analyzeArray(testArray))
    .toMatchObject({
      length: 7,
    });
});

test('Test maximum value', () => {
  expect(analyzeArray(testArray))
    .toMatchObject({
      max: 9999,
    });
});

test('Test mininum value', () => {
  expect(analyzeArray(testArray))
    .toMatchObject({
      min: -99991,
    });
});

test('Test average', () => {
  expect(analyzeArray(testArray))
    .toMatchObject({
      average: -12784.142857142857,
    });
});

test('Test an array', () => {
  expect(analyzeArray([1,8,3,4,2,6]))
    .toMatchObject({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
});

test('Test an empty array', () => {
  expect(analyzeArray([]))
    .toMatchObject({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
});
