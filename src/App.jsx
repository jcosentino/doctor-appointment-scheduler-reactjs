import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Signup/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup />
      </div>
    );
  }
}

export default App;
