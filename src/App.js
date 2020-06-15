import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Retail from './components/RetailComponent';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Tre Cafe</NavbarBrand>
              </div>
              </Navbar>
              <Retail />
          </div>
      );
  }
}

export default App;
