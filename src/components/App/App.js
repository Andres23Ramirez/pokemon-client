import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import { Home } from '../Home/Home'
import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<PokemonsContextProvider>
				<Home />
			</PokemonsContextProvider>
		</div>
	)
}

export default App
