import React, {Component} from 'react'
import {getPokemon} from '../../services/pokemon';
import './Details.css'

class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pokemon: 'Default Name',
			pokemonImage: 'http://www.pngmart.com/files/2/Pokeball-PNG-Free-Download.png'
		}
	}

	componentDidMount() {
		var id = this.props.match.params.id;
		getPokemon(id)
			.then(res => {
				this.setState({
					pokemon: res.name,
					pokemonImage: res.sprites.front_default
				})
			})
	}
	
	render() {
		return(
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
		) 
	}
}

export default Details