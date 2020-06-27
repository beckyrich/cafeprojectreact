import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'

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
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container center">
                        <h1>Tre Caffè</h1>
                        <p className="lead">Get Up! Get Coffee! Be Happy!</p>
                    </div>
                </Jumbotron>
                <Navbar className="navbar-dark bg-dark" sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="center" pills navbar>
                                <NavItem>
                                   <NavLink className="nav-link" to="/home">HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">MEET THE TEAM</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">MENU</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/location">LOCATION</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/retail">RETAIL</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;