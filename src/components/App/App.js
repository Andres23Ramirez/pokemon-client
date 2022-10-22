import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'></header>
      <main className='container'>
        <PokemonsContextProvider>
          <Home />
        </PokemonsContextProvider>
      </main>
    </div>
  )
}

export default App
