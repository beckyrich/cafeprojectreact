import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { render } from 'react-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }   

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        retrun (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <h1>Tre Caffè</h1>
                        <p className="lead">Get Up! Get Coffee! Be Happy!</p>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}