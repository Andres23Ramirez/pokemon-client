import { PokemonsContextProvider } from '../../contexts/PokemonsContextProvider'
import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='App-header'></header>
			<PokemonsContextProvider></PokemonsContextProvider>
		</div>
	)
}

export default App
