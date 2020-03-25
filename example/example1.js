const getUniq = require('../dist').getUniq

const gen = getUniq(100)

// from 100
console.log(gen())
console.log(gen())
console.log(gen())

// from 0
console.log(getUniq())
console.log(getUniq())
