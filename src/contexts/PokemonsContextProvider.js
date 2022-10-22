import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getPokemonsIndex } from '../api/pokemons-index'
import { PokemonsContext } from './PokemonsContext'

const PokemonsContextProvider = ({ children }) => {
  const [currentPage, setCurrenPage] = useState(0)
  const [queryParams, setQueryParams] = useState({
    page: currentPage,
    perPage: 12,
  })
  const [values, setValues] = useState([])

  const { data, status } = useQuery(['pokemons', queryParams], () =>
    getPokemonsIndex(queryParams)
  )

  useEffect(() => {
    if (status === 'success') {
      setValues([...values, ...data])
    }
  }, [data, status])

  return (
    <PokemonsContext.Provider
      value={{
        values,
        queryParams,
        setQueryParams,
        currentPage,
        setCurrenPage,
      }}
    >
      {children}
    </PokemonsContext.Provider>
  )
}

export { PokemonsContextProvider }
