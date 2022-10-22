import { useContext } from 'react'
import { PokemonsContext } from './PokemonsContext'

const PokemonsContextProvider = ({ children }) => {
  const { pokemons } = useContext(PokemonsContext)

  return (
    <PokemonsContext.Provider value={{ pokemons }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export { PokemonsContextProvider }
