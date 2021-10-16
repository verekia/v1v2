const either = (
  value: unknown,
  ...comparisons: [firstComparison: unknown, ...moreComparisons: unknown[]]
) => comparisons.some(x => x === value)

export default either
