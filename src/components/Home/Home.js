import { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { Pokemon } from '../Pokemon/Pokemon'
import './Home.css'

const Home = () => {
  const { values, queryParams, setQueryParams, currentPage, setCurrenPage } =
    useContext(PokemonsContext)
  const listInnerRef = useRef()

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollHeight } = listInnerRef.current
      if (window.scrollY + window.innerHeight > scrollHeight) {
        // This will be triggered after hitting the last element.
        // API call should be made here while implementing pagination.
        setCurrenPage(currentPage + 1)
        setQueryParams({
          page: currentPage + 1,
          perPage: queryParams.perPage,
        })
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='gallery' ref={listInnerRef}>
      {values?.map((item, index) => {
        return (
          <div key={index}>
            <Link to={'pokemons/' + item.id}>
              <Pokemon key={index} item={item} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export { Home }
