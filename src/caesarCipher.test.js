import { caesarCipher } from './caesarCipher';

test('Test a word', () => {
  expect(caesarCipher('cipher', 3)).toBe('flskhu');
});

test('Test lowercase and uppercase alphabets', () => {
  expect(
    caesarCipher('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 3)
  )
  .toBe('defghijklmnopqrstuvwxyzabcDEFGHIJKLMNOPQRSTUVWXYZABC');
});

test('Test uppercase and lowercase', () => {
  expect(
    caesarCipher('ThErE iS nO nEeD tO cHaNgE cAsE', 5)
  )
  .toBe('YmJwJ nX sT sJjI yT hMfSlJ hFxJ');
});

test('Test a string with other symbols', () => {
  expect(
    caesarCipher('there are [] 0ther symb01s h3r3', 3)
  )
  .toBe('wkhuh duh [] 0wkhu vbpe01v k3u3');
});

test('Test a sentence', () => {
  expect(
    caesarCipher(
      'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.',
      7
    )
  )
  .toBe('Pm ol ohk hufaopun jvumpkluaphs av zhf, ol dyval pa pu jpwoly, aoha pz, if zv johunpun aol vykly vm aol slaalyz vm aol hswohila, aoha uva h dvyk jvbsk il thkl vba.');
});

test('Test large keys', () => {
  expect(caesarCipher('large', 321)).toBe('ujapn');
});

test('Test large negative keys', () => {
  expect(caesarCipher('large negative', -123)).toBe('shynl ulnhapcl');
});

test('Test negative keys', () => {
  expect(caesarCipher('negative', -2)).toBe('lceyrgtc');
});

test('Test empty strings', () => {
  expect(caesarCipher('', 3)).toBe('');
});

test('Test missing key (default it to 3)', () => {
  expect(caesarCipher('Missing key')).toBe('Plvvlqj nhb');
});
