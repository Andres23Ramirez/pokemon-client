import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { Pokemon } from '../Pokemon/Pokemon'
import './Home.css'

const Home = () => {
  const { values } = useContext(PokemonsContext)
  return (
    <div className='gallery'>
      {values?.map((item, index) => {
        return (
          <div key={index}>
            <Pokemon key={index} item={item} />
          </div>
        )
      })}
    </div>
  )
}

export { Home }
