import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <button onClick={this.increment.bind(this)}>+</button> */}
        <button onClick={this.props.increment}>+</button>
        {/* {this.state.count} */}
        {this.props.count}
        {/* <button onClick={this.decrement.bind(this)}>-</button> */}
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

export default App;
