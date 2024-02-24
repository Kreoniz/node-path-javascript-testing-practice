# Overview of the project

## Compiling and testing
All the functions and their tests are in the `src` folder.

[Babel](https://babeljs.io/) is used for ES6 modules with [jest](https://jestjs.io/).
To compile the functions and the tests run:
```console
$ npm run babel
```

To run the tests **in the `dist` folder** run:
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
