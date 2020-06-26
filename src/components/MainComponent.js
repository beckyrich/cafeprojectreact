import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Retail from './RetailComponent';
import { PRODUCTS } from '../shared/products';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/retail' render={() => <Retail products={this.state.products}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    } 
}

export default Main; 
