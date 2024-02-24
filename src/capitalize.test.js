import capitalize from './capitalize';

test('Capitalizes word to Word', () => {
  expect(capitalize('word')).toBe('Word');
});

test('Capitalizes the first letter of a long string', () => {
  expect(
    capitalize(
      'lorem ipsum dolor sit amet, consectetur adipiscing elit. nam vulputate feugiat odio id pharetra. in.'
    )
  ).toBe(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. nam vulputate feugiat odio id pharetra. in.'
  );
});

test('Does nothing when the first character is not a letter', () => {
  expect('1337code').toBe('1337code');
});

test('Does nothing when the string is empty', () => {
  expect('').toBe('');
});
