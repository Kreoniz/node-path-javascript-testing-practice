import { reverseString } from './reverseString';

test('Reverses a single word', () => {
  expect(reverseString('banana')).toBe('ananab');
});

test('Reverses a sentence', () => {
  expect(
    reverseString('When something is important enough, you do it even if the odds are not in your favor')
  )
  .toBe('rovaf ruoy ni ton era sddo eht fi neve ti od uoy ,hguone tnatropmi si gnihtemos nehW');
});

test('Does nothing to a palindrome', () => {
  expect(reverseString('madam')).toBe('madam');
});

test('Does nothing to an empty string', () => {
  expect(reverseString('')).toBe('');
});
