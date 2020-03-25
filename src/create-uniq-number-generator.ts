function* createUniqNumberGenerator(startingNumber: number = 0): Generator<number, undefined, boolean> {
  let number = startingNumber

  while (true) {
    yield number++
  }
}

export { createUniqNumberGenerator }
