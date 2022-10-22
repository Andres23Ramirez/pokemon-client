import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
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
          <Home />
        </PokemonsContextProvider>
      </main>
    </div>
  )
}

export default App
