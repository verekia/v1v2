const either = (
  value: unknown,
  ...comparisons: [
    firstComparison: unknown,
    secondComparison: unknown,
    ...moreComparisons: unknown[],
  ]
): boolean => comparisons.includes(value)

export default either
