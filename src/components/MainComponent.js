import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Retail from './RetailComponent';
import MenuHot from './MenuHotComponent';
import MenuCold from './MenuColdComponent';
import Team from './TeamComponent;';
import MenuFood from './MenuFoodComponent';
import Location from './LocationComponent';
import { PRODUCTS } from '../shared/products';
import { HOTDRINKS } from '../shared/hotdrinks';
import { COLDDRINKS } from '../shared/colddrinks';
import { FOODS } from '../shared/menufood';
import { TEAMMEMBERS } from '../shared/team';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS,
            hotdrinks: HOTDRINKS,
            colddrinks: COLDDRINKS,
            foods: FOODS,
            teams: TEAMMEMBERS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div id="mainBG">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menuhot' render ={() => <MenuHot hotdrinks={this.state.hotdrinks} />} />
                    <Route exact path='/menucold' render ={() => <MenuCold colddrinks={this.state.colddrinks} />} />
                    <Route exact path='/team' render ={() => <Team teamMembers={this.state.teams} />} />
                    <Route exact path='/menufood' render ={() => <MenuFood foods={this.state.foods} />} />
                    <Route exact path='/location' render ={() => <Location />} />
                    <Route exact path='/retail' render={() => <Retail products={this.state.products}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    } 
}

export default Main; 
