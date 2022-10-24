import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext'

const PokemonDetails = () => {
  const { values, setIdParam } = useContext(PokemonContext)
  const { id } = useParams()

  useEffect(() => {
    setIdParam(id)
  }, [])

  return <h1>Pokemon id: {values?.id}</h1>
}

export { PokemonDetails }
