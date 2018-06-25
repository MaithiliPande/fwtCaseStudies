import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todo : {
        name : String,
        date : String
      },
      todoList : []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" placeholder="Enter todo" id="todoInput"/>
        <input type="date" id="dateInput"/>
        <button id="addTodo" onClick={this.props.addTodo}>Add</button>
        <ul></ul>
      </div>
    );
  }
}

export default App;
