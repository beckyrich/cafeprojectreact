import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Team from './TeamComponent';
import Location from './LocationComponent';
import Retail from './RetailComponent';
import { PRODUCTS } from '../shared/products';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    super(props);
    this.state = {
        products: PRODUCTS,
    };

    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' componet={Home} />
                    <Route path='/menu' component={Menu} />
                    <Route path='/team' component={Team} />
                    <Route path='/location' component={Location} />
                    <Route exact path='/retail' render={() => <Retail products={this.state.products} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>  
        );
    }
}
        
export default Main; 
       

