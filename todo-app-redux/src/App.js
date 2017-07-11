import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import TodoList from './components/TodoList'
import InProgress from './components/InProgress'
import Completed from './components/Completed'
import './App.css';

class App extends Component {
  render() {
    console.log(this.props)
    return(
      <div className="App">
        <h1>To-Do App</h1>
        <SearchBar />
        <div className="list_wrapper">  
          <TodoList />
          <InProgress />
          <Completed />
        </div>
        
      </div>
    ) 
  }
}

export default App;
