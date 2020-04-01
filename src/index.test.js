const { getUniq, createUniqNumberGenerator } = require('../dist/index')

test('generator should yield a new number on each call, from 0', () => {
  const generator = createUniqNumberGenerator() // 0

  expect(generator.next().value).toEqual(0)
  expect(generator.next().value).toEqual(1)
})

test('should create unique numbers on each call', () => {
  const firstCall = getUniq() // 0
  const secondCall = getUniq() // 1

  expect(firstCall).not.toEqual(secondCall)
  expect(firstCall).toBeLessThan(secondCall)
  expect(secondCall).toBeGreaterThan(firstCall)
})

test('should create unique numbers from a determined number', () => {
  const startFrom = 100
  const uniqueStartFrom100 = getUniq(startFrom)

  expect(uniqueStartFrom100()).toEqual(100)
  expect(uniqueStartFrom100()).toEqual(101)
  expect(uniqueStartFrom100()).toEqual(102)
  expect(uniqueStartFrom100()).toEqual(103)
})
