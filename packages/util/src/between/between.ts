const between = (
  value: number,
  lowerBound: number,
  upperBound: number,
  option:
    | 'include'
    | 'exclude'
    | 'include-lower'
    | 'include-upper'
    | 'exclude-lower'
    | 'exclude-upper' = 'include'
) =>
  option === 'include'
    ? lowerBound <= value && value <= upperBound
    : option === 'exclude'
    ? lowerBound < value && value < upperBound
    : option === 'exclude-lower' || option === 'include-upper'
    ? lowerBound < value && value <= upperBound
    : option === 'include-lower' || option === 'exclude-upper'
    ? lowerBound <= value && value < upperBound
    : null

export default between
