const costConverter = (abilityScore = 0) => {
  if (typeof(abilityScore) !== 'number') throw new Error('ability score must be a number')
  switch(abilityScore) {
    case 8:
      return 0
    case 9:
      return 1
    case 10:
      return 2
    case 11:
      return 3
    case 12:
      return 4
    case 13:
      return 5
    case 14:
      return 7
    case 15:
      return 9
    default:
      throw new Error('ability score must be between 8 and 15')
  }
}

export {
  costConverter
}