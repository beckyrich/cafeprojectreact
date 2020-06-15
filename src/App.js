import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Retail from './components/RetailComponent';
import { PRODUCTS } from './shared/products.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS
        }
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Tre Caffè</NavbarBrand>
              </div>
              </Navbar>
              <Retail products={this.state.products} />
          </div>
      );
  }
}

export default App;
