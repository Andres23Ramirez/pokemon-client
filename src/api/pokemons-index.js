import { getData } from './client'

export const getPokemonsIndex = ({ page, perPage }) => {
  return getData({
    url: `pokemons`,
    params: {
      page,
      perPage,
    },
    transform: response => response,
  })
}
