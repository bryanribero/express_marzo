import { sum } from '../sum.js'

test('sum de sum.js, 2 + 3 da 5', () => {
  const result = sum(2, 3)
  expect(result).toBe(5)
})
