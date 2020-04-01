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

Generate unique numbers with javascript generators.

* **Small** 272 bytes (minified and gzipped).
* **No dependencies**
* **Tested**

## Example

```js
import { getUniq } from 'uniq-number'

console.log( getUniq() )
console.log( getUniq() )
console.log( getUniq() )
// 0
// 1
// 2

const getUniqueNumberFromTen = getUniq(10)
console.log( getUniqueNumberFromTen() )
console.log( getUniqueNumberFromTen() )
console.log( getUniqueNumberFromTen() )
// 10
// 11
// 12


```


## Install

```
$ npm install --save uniq-number
```
