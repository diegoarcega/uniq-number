<p align="center">
    <h1 align="center">uniq-number</h1>
</p>
<p align="center">
    <img src="https://badgen.net/npm/v/uniq-number" />
    <img src="https://badgen.net/npm/types/uniq-number" />
    <img src="https://badgen.net/github/issues/diegoarcega/uniq-number" />
    <img src="https://badgen.net/github/stars/diegoarcega/uniq-number" />
    <img src="https://badgen.net/bundlephobia/minzip/uniq-number" />
</p>

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
