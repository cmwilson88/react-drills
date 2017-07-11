import React, {Component} from 'react';
import {getPokemonTypes} from '../../services/type.js'
import './Type.css'

class Type extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemonType: 'Default Type',
			pokemonList: []
		}
	}

	componentDidMount() {
		getPokemonTypes(this.props.match.params.id)
			.then(res => {
				this.setState({
					pokemonType: res.name,
					pokemonList: res.pokemon
				});
			});
	}
	render() {
		const pokemons = this.state.pokemonList.map((pokemon, i) => (
	          <li key={i}>{pokemon.pokemon.name}</li>
      	))

		return(
			<div className="">
				<h1>{this.state.pokemonType}</h1>
				<div className="">
					<ul>
						{pokemons}
					</ul>
				</div>
			</div>
		) 
	}
}

export default Type