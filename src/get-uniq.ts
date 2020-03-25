import { createUniqNumberGenerator } from './create-uniq-number-generator'

const globalGenerator = createUniqNumberGenerator()


export function getUniq(startingNumber: number = 0): number | Function {
  const generator = createUniqNumberGenerator(startingNumber)

  if (startingNumber !== 0) {
    return function () {
      return generator.next().value
    }
  }

  return globalGenerator.next().value
}
