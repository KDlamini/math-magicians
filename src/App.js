/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import Quotes from './pages/Quotes';
import './styles/Calculator.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Navbar />
        <Switch>
          <Route path="/quote">
            <Quotes />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default App;
