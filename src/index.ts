function* createUniqNumberGenerator(startingNumber: number = 0): Generator<number, undefined, boolean> {
  let number = startingNumber

  while (true) {
    yield number++
  }
}


const globalGenerator = createUniqNumberGenerator()

function getUniq(startingNumber: number = 0): number | Function {
  const generator = createUniqNumberGenerator(startingNumber)

  if (startingNumber !== 0) {
    return function () {
      return generator.next().value
    }
  }

  return globalGenerator.next().value
}


export { createUniqNumberGenerator, getUniq }
