import axios from 'axios'

export function getPokemonTypes(id) {
	return axios.get(`http://pokeapi.co/api/v2/type/${id}`)
		.then(res => res.data)
}