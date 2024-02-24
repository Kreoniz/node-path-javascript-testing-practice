# Overview of the project

## Compiling and testing
[Babel](https://babeljs.io/) is used for ES6 modules with [jest](https://jestjs.io/).
To compile the project run
```console
$ npm run babel
```

All the functions and their tests are in the `src` folder.
To run the tests run
```console
$ npm test 
```

## Functions
- `capitalize(string)` returns a string with the first letter capitalized.
- `reverseString(string)` reverses a string.
- `calculator` object has the following functions: `add(a, b)`, `subtract(a,
  b)`, `divide(a, b)`, `multiply(a, b)`.
- `caesarCipher(string, key = 3)` shifts each letter of the latin alphabet by
  `key` positions.
- `analyzeArray(array)` returns an object with `average`, `min`, `max` and
  `length` properties.
