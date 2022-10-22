import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

const Home = () => {
  const { values } = useContext(PokemonsContext)
  return (
    <div>
      {values?.map((item, index) => {
        return (
          <div key={index}>
            <p>Name: {item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export { Home }
