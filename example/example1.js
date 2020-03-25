const createUniqNumberGenerator = require('../dist').createUniqNumberGenerator

const gen = createUniqNumberGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
