import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext'
import './PokemonDetails.css'

const PokemonDetails = () => {
  const { values, setIdParam } = useContext(PokemonContext)
  console.log(values)
  const { id } = useParams()

  useEffect(() => {
    setIdParam(id)
  }, [])

  return (
    <div className='pokemon-container'>
      <div className='pokemon-image'>
        <h2>{values?.name}</h2>
        <img src={values?.imageUrl} />
      </div>
      <div className='pokemon-details'>
        <div className='types'>
          {values?.types?.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className='about-container'>
          <h2>About</h2>
          <div className='about-details'>
            <div className='about-detils-item'>
              <img src='/icons/Weight.svg' alt='weight icon' />
              <span>{values?.weight}</span>
              <spa>Weight</spa>
            </div>
            <div className='about-detils-item'>
              <img src='/icons/Height.svg' alt='Height icon' />
              <span>{values?.Height}</span>
              <spa>Height</spa>
            </div>
            <div className='about-detils-item'>
              <img src='/icons/Moves.svg' alt='moves icon' />
              {values?.moves?.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
              <spa>Moves</spa>
            </div>
          </div>
        </div>
        <div className='description'>
          <p>{values?.description}</p>
        </div>
        <div className='stats'>
          {values?.stats?.map((item, index) => {
            return (
              <div key={index}>
                <span>{item?.name}</span>
                <span>{item?.value}</span>
                <span>barra</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export { PokemonDetails }
