import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
import { PokemonDetails } from '../PokemonDetails.js/PokemonDetails'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-header-container'>
          <img src='/pokeball.jpg' />
          <h1>Poke App</h1>
        </div>
      </header>
      <main className='container'>
        <PokemonsContextProvider>
          <BrowserRouter basename='/'>
            <Routes>
              <Route path='*' element={<Home />} />
              <Route path='pokemons/:name' element={<PokemonDetails />} />
            </Routes>
          </BrowserRouter>
        </PokemonsContextProvider>
      </main>
    </div>
  )
}

export default App
