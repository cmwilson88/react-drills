import axios from 'axios'

export function getPokemon(id) {
	return axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`)
		.then(res => res.data);
}