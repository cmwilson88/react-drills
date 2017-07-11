import React, {Component} from 'react';
import {getPokemon} from '../../services/pokemon';
import './Search.css';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state={
			userInput: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			userInput: e.target.value
		})
	}
	render(props) {
		return (
			<div className="search_bar">
				<input onChange={this.handleChange} id="search_input" type="text"/>
				<button 
					onClick= {() => this.props.searchPokemon(this.state.userInput)}
					className="search_button">
					Search
				</button>
			</div>
		)
	}
}

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemon: 'Default Name',
			pokemonImage: 'http://www.pngmart.com/files/2/Pokeball-PNG-Free-Download.png'
		}

		this.searchPokemon = this.searchPokemon.bind(this);
	}

	searchPokemon(id) {
		getPokemon(id)
			.then(res => {
				this.setState({
					pokemon: res.name,
					pokemonImage: res.sprites.front_default
				})
			});
	}

	render() {
		return(
			<div className="Search">
				<SearchBar searchPokemon={this.searchPokemon}/>
				<div className="results_box">
					<div className="image_container">
						<div 
							className="image"
							style={{backgroundImage: `url(${this.state.pokemonImage}`}}>
						</div>
					</div>
					<div className="display_name">
						{this.state.pokemon}
					</div>
				</div>
			</div>
		) 
	}
}

export default Search;