import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <nav className="nav-wrapper">
          <div className="container">
              <Link to="/" className="brand-logo">Shopping</Link>
              
              <ul className="right">
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/cart">My cart</Link></li>
                  <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
              </ul>
          </div>
      </nav>  
    );
  }
}
