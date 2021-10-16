import either from './either'

test('either', () => {
  expect(either(1, 1)).toBe(true)
  expect(either(1, 1, 2)).toBe(true)
  expect(either(2, 1, 2)).toBe(true)
  expect(either(3, 1, 2)).toBe(false)
})
