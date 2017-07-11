import React, {Component} from 'react';
import {connect} from 'react-redux';
import {inProgressAction} from '../ducks/reducer'

class TodoList extends Component {
	render() {
		console.log(this.props)
		const todos = this.props.todos.map((item, i) => {
			return ( 
				<li key={i}
				onClick={() => this.props.inProgressAction(item)}
			>{item}</li> )
		})
		return (
			<div>
				<h3>To Do</h3>
				<ul>
					{todos}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos,
		inProgress: state.inProgress
	}
}

export default connect(
	mapStateToProps,
	{
		inProgressAction
	}
)(TodoList)
