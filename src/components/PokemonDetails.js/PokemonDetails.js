import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonContext } from '../../contexts/PokemonContext'
import ProgressBar from './PogressBar'
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
            return (
              <div className='type-container' key={index}>
                {<span>{item}</span>}
              </div>
            )
          })}
        </div>
        <div className='about-container'>
          <h2>About</h2>
          <div className='about-details'>
            <div className='about-details-item'>
              <img src='/icons/Weight.svg' alt='weight icon' />
              <span>{values?.weight} kg</span>
              <div>
                <h3>Weight</h3>
              </div>
            </div>
            <img className='separator' src='/icons/separator.svg' />
            <div className='about-details-item'>
              <img src='/icons/Height.svg' alt='Height icon' />
              <span>{values?.height} m</span>
              <div>
                <h3>Height</h3>
              </div>
            </div>
            <img className='separator' src='/icons/separator.svg' />
            <div className='about-details-item'>
              <img src='/icons/Moves.svg' alt='moves icon' />
              {values?.moves?.map((item, index) => {
                return <span key={index}>{item}</span>
              })}
              <div>
                <h3>Moves</h3>
              </div>
            </div>
          </div>
        </div>

        <span>{values?.description}</span>
        <div className='stats'>
          <h2>Base Stats</h2>
          <div className='stats-container'>
            <div className='stats-names'>
              {values?.stats?.map((item, index) => {
                return (
                  <div key={index} className={'stats-item'}>
                    <span>{item?.name}</span>
                  </div>
                )
              })}
            </div>
            <img src='/icons/Stats-separator.svg' className='stats-separator' />
            <div className='stats-values'>
              {values?.stats?.map((item, index) => {
                return (
                  <div key={index} className={'stats-item'}>
                    <span>{item?.value}</span>
                  </div>
                )
              })}
            </div>
            <div className='stats-progress'>
              {values?.stats?.map((item, index) => {
                return (
                  <div key={index} className={'stats-item'}>
                    <ProgressBar
                      key={index}
                      bgcolor={'#74CB48'}
                      completed={item.value}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { PokemonDetails }
