import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonContextProvider } from '../../contexts/PokemonContextProvider'
import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
import { PokemonDetails } from '../PokemonDetails.js/PokemonDetails'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-header-container'>
          <img src='/icons/Pokeball.svg' />
          <h1>Poke App</h1>
        </div>
      </header>
      <main className='container'>
        <PokemonsContextProvider>
          <BrowserRouter basename='/'>
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
          </BrowserRouter>
        </PokemonsContextProvider>
      </main>
    </div>
  )
}

export default App
