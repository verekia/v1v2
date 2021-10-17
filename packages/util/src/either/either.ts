const either = (
  value: unknown,
  ...comparisons: [
    firstComparison: unknown,
    secondComparison: unknown,
    ...moreComparisons: unknown[]
  ]
) => comparisons.includes(value)

export default either
