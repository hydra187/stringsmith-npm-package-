# stringsmith

Small, dependable string helpers for Node.js with zero runtime dependencies.

## Installation

```bash
npm install stringsmith
```

*(Note: This is a local learning project and is not published to the public registry.)*

## Requirements

- Node.js >= 18.0.0

## Quick Start

```javascript
const {
  slugify,
  capitalize,
  titleCase,
  truncate,
  isPalindrome,
  camelCase,
  snakeCase,
  kebabCase,
  countWords,
  reverse,
  removeExtraSpaces,
  maskString
} = require('stringsmith');

// Create URL-safe slugs
slugify('Crème Brûlée'); // 'creme-brulee'

// Casing utilities
capitalize('hello world'); // 'Hello world'
titleCase('the journey of the code'); // 'The Journey of the Code'
camelCase('user_first_name'); // 'userFirstName'
snakeCase('userFirstName'); // 'user_first_name'
kebabCase('userFirstName'); // 'user-first-name'

// Text formatting & trimming
truncate('Long descriptive text goes here', 15); // 'Long descrip...'
removeExtraSpaces('  too   many    spaces  '); // 'too many spaces'
countWords('Count the words here'); // 4

// Linguistic checks & transformations
isPalindrome('racecar'); // true
reverse('hello 👋'); // '👋 olleh' (safely preserves multi-byte emoji)
maskString('1234567812345678'); // '************5678'
```

## Running Tests

This project uses the native Node.js test runner (`node:test`), so no third-party test libraries are required.

```bash
npm test
```
