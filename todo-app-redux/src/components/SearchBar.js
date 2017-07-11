import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleUserInput, addTodoAction, resetInput} from '../ducks/reducer';

class SearchBar extends Component {
	render() {
		console.log(this.props)
		return(
			<div className="search_wrapper">
				<input type="text" onChange={(e)=>this.props.handleUserInput(e.target.value)} value={this.props.userInput}/>
		        <button 
		          type="submit" 
		          onClick={(e)=>{
		            e.preventDefault();
		            this.props.addTodoAction(this.props.userInput)
		            this.props.resetInput();
		          }
		        }>Submit</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos,
		userInput: state.userInput
	}
}

export default connect(
	mapStateToProps,
	{
		handleUserInput,
		addTodoAction,
		resetInput
	}
)(SearchBar);

