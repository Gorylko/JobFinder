import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
      <header>
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">JF</Link>

                <ul className="right">
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/items">Items</Link></li>
                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>  
      </header>
    );
  }
}

export default NavMenu;
