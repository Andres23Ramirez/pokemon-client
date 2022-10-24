const useFindColorByType = type => {
  const typesColors = new Map([
    ['grass', '#74CB48'],
    ['fire', '#F57D31'],
    ['water', '#6493EB'],
    ['electric', '#F9CF30'],
    ['poison', '#A43E9E'],
    ['flying', '#A7B723'],
    ['gas', '#70559B'],
    ['normal', '#AAA67F'],
    ['psychic', '#FB5584'],
    ['stell', '#B7B9D0'],
    ['ground', '#749000'],
    ['bug', '#A7B723'],
  ])

  return typesColors.get(type.toLowerCase())
}

export { useFindColorByType }
