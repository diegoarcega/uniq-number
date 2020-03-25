function* createUniqNumberGenerator(startingNumber: number = 0) {
  let number = startingNumber

  while (true) {
    yield number++
  }
}

export { createUniqNumberGenerator }
