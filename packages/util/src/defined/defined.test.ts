import defined from './defined'

test('defined', () => {
  expect(defined('')).toBe(true)
  expect(defined(0)).toBe(true)
  expect(defined(NaN)).toBe(true)
  expect(defined(null)).toBe(true)

  expect(defined(undefined)).toBe(false)
  expect(defined(void 0)).toBe(false)
})
