import { useContext } from 'react'
import { PokemonsContext } from './PokemonsContext'

const PokemonsContextProvider = ({ children, providedValues }) => {
	const context = useContext(PokemonsContext)

	return <context.Provider value={providedValues}>{children}</context.Provider>
}

export { PokemonsContextProvider }
