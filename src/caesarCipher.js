const lowercaseLetters = [];
const uppercaseLetters = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i += 1) {
  lowercaseLetters.push(String.fromCodePoint(i));
}

for (let i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i += 1) {
  uppercaseLetters.push(String.fromCodePoint(i));
}

const alphabetLength = lowercaseLetters.length;

function getNewIndex(key, position) {
  let index = (key + position);

  if (index > alphabetLength - 1) {
    return index % alphabetLength;
  }

  return index;
}

export function caesarCipher(string, key=3) {
  if (key > (alphabetLength - 1) || key < 0) {
    key = key % alphabetLength;
  }

  let cipher = '';
  for (let i = 0; i < string.length; i += 1) {
    const char = string[i];

    if (lowercaseLetters.includes(char)) {
      const position = lowercaseLetters.indexOf(char);
      const index = getNewIndex(key, position);

      cipher += lowercaseLetters.at(index);
    } else if (uppercaseLetters.includes(char)) {
      const position = uppercaseLetters.indexOf(char);
      const index = getNewIndex(key, position);

      cipher += uppercaseLetters.at(index);
    } else {
      cipher += char;
    }
  }

  return cipher;
}
