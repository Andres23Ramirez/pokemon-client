import { getData } from './client'

export const getPokemonDetail = idParam => {
  return getData({
    url: `pokemons/` + idParam,
    transform: response => response,
  })
}
