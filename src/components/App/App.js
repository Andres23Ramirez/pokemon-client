import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { PokemonContextProvider } from '../../contexts/PokemonContextProvider'
import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
import { PokemonDetails } from '../PokemonDetails.js/PokemonDetails'
import './App.css'

function App() {
  return (
    <BrowserRouter basename='/'>
      <div className='App'>
        <header className='App-header'>
          <Link to={'/'}>
            <div className='App-header-container'>
              <img src='/icons/Pokeball.svg' />
              <h1>Poke App</h1>
            </div>
          </Link>
        </header>
        <main className='container'>
          <PokemonsContextProvider>
            <Routes>
              <Route path='*' element={<Home />} />
              <Route
                path='pokemons/:id'
                element={
                  <PokemonContextProvider>
                    <PokemonDetails />
                  </PokemonContextProvider>
                }
              />
            </Routes>
          </PokemonsContextProvider>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
