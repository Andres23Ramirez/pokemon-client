import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { Pokemon } from '../Pokemon/Pokemon'
import './Home.css'

const Home = () => {
  const { values } = useContext(PokemonsContext)
  return (
    <div className='gallery'>
      {values?.map((item, index) => {
        return <Pokemon key={index} item={item} />
      })}
    </div>
  )
}

export { Home }
