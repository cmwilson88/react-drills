import React, { Component } from 'react';
import Child from './Child';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Title'
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitNewTitle = this.submitNewTitle.bind(this)
  }

  handleChange(e) {
    if(!e.target.value) {
      this.setState({
        title: 'Title'
      })
    } else {
      this.setState({
        title: e.target.value
      })
    }
  }

  submitNewTitle(str) {
    var newTitle = str;
    this.setState({
      title: newTitle
    })
  }

  render() {
    return (
      <div className="App"> 
        <h1>{this.state.title}</h1>
        <input onChange={this.handleChange} type="text"/>
        <div className="childWrapper">
          <Child title={this.state.title} submitNewTitle={this.submitNewTitle}/>
          <Child title={this.state.title} submitNewTitle={this.submitNewTitle}/>
        </div>
      </div>
    );
  }
}

export default App;
