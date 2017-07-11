import React, {Component} from 'react';
import "./Child.css";

class Child extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			userInput: ''
		}

		this.handleChange = this.handleChange.bind(this);
	}

	componentWillReceiveProps(props) {
		this.setState({
			title: props.title
		})
	}

	handleChange(e) {
      this.setState({
      	title: e.target.value,
        userInput: e.target.value
      })
    }


	render() {
		return(
			<div className="childComponent">
				<h1>{this.state.title}</h1>
				<input onChange={this.handleChange} type="text" />
				<button onClick={() => this.props.submitNewTitle(this.state.userInput)}>Submit</button>
			</div>
		) 
	}
}

export default Child;