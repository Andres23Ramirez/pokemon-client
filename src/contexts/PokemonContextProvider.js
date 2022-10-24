import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getPokemonDetail } from '../api/pokemon-index'
import { PokemonContext } from './PokemonContext'

const PokemonContextProvider = ({ children }) => {
  const [idParam, setIdParam] = useState(0)
  const [values, setValues] = useState([])

  const { data, status, refetch } = useQuery(
    ['pokemons', idParam],
    () => getPokemonDetail(idParam),
    { enabled: false }
  )

  useEffect(() => {
    if (status === 'success') {
      setValues(data)
    }
  }, [data, status])

  useEffect(() => {
    if (idParam !== 0) refetch()
  }, [idParam])

  return (
    <PokemonContext.Provider
      value={{
        values,
        idParam,
        setIdParam,
        refetch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export { PokemonContextProvider }
