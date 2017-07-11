import React, {Component} from 'react';
import {connect} from 'react-redux';
import {removeItem} from '../ducks/reducer'

class Completed extends Component {
	render() {
		console.log(this.props)
		const completed = this.props.completed.map((item, i) => {
			return ( 
				<li key={i}
				onClick={() => this.props.removeItem(item)}
			>{item}</li> )
		})
		return (
			<div>
				<h3>Completed</h3>
				<ul>
					{completed}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		completed: state.completed
	}
}

export default connect(
	mapStateToProps,
	{
		removeItem
	}
)(Completed)