import between from './between'

test('between', () => {
  expect(between(50, 10, 100)).toBe(true)

  expect(between(10, 10, 100)).toBe(true)
  expect(between(100, 10, 100)).toBe(true)
  expect(between(10, 10, 100, 'include')).toBe(true)
  expect(between(100, 10, 100, 'include')).toBe(true)

  expect(between(10, 10, 100, 'exclude-lower')).toBe(false)
  expect(between(100, 10, 100, 'exclude-lower')).toBe(true)
  expect(between(10, 10, 100, 'include-upper')).toBe(false)
  expect(between(100, 10, 100, 'include-upper')).toBe(true)

  expect(between(10, 10, 100, 'exclude-upper')).toBe(true)
  expect(between(100, 10, 100, 'exclude-upper')).toBe(false)
  expect(between(10, 10, 100, 'include-lower')).toBe(true)
  expect(between(100, 10, 100, 'include-lower')).toBe(false)

  expect(between(10, 10, 100, 'exclude')).toBe(false)
  expect(between(100, 10, 100, 'exclude')).toBe(false)
})
