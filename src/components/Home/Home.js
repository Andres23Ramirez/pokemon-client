import { useContext } from 'react'
import { PokemonsContext } from '../../contexts/PokemonsContext'

const Home = () => {
	const { pokemons } = useContext(PokemonsContext)
	return (
		<div>
			{pokemons?.map((item, index) => {
				return (
					<div key={index}>
						<p>Name: {item.name}</p>
					</div>
				)
			})}
		</div>
	)
}

export { Home }
