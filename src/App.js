/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import './styles/Calculator.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Calculator />
      </main>
    );
  }
}

export default App;
