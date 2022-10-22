import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getPokemonsIndex } from '../api/pokemons-index'
import { PokemonsContext } from './PokemonsContext'

const PokemonsContextProvider = ({ children }) => {
  const [queryParams] = useState({
    page: 1,
    per_page: 10,
  })
  const [values, setValues] = useState([])

  const { data, status } = useQuery('pokemons', () =>
    getPokemonsIndex(queryParams)
  )

  useEffect(() => {
    if (status === 'success') {
      setValues(data)
    }
  }, [data, status])

  return (
    <PokemonsContext.Provider value={{ values }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export { PokemonsContextProvider }
