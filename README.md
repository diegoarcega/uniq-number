# uniq-number

Generate unique numbers with javascript generators

## Example

```js
import { createUniqNumberGenerator } from 'uniq-number';

const uniqNumberGenerator = createUniqNumberGenerator(10)
console.log( uniqNumberGenerator.next().value );
console.log( uniqNumberGenerator.next().value );
console.log( uniqNumberGenerator.next().value );

// 10
// 11
// 12

```


## Install

```
$ npm install --save uniq-number
```
