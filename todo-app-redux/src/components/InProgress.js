import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completedAction} from '../ducks/reducer'

class InProgress extends Component {
	render() {
		console.log(this.props)
		const inProgress = this.props.inProgress.map((item, i) => {
			return ( 
				<li key={i}
				onClick={() => this.props.completedAction(item)}
			>{item}</li> )
		})
		return (
			<div>
				<h3>In Progress</h3>
				<ul>
					{inProgress}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		completed: state.completed,
		inProgress: state.inProgress
	}
}

export default connect(
	mapStateToProps,
	{
		completedAction
	}
)(InProgress)