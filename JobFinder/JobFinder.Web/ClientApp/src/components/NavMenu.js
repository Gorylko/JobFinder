import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {authenticationService} from '../services/authentication.service'

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
    const profileButton = authenticationService.currentUserValue
    ? 
    <Link to='/' onClick={authenticationService.logout}>                      
      <li><a class="large waves-effect waves-light btn-large">Logout<i class="material-icons right">cancel</i></a></li>
    </Link>
    : 
    <Link to="/auth/login">
      <li><a class="large waves-effect waves-light btn-large">Log in<i class="material-icons right">cloud_done</i></a></li>
    </Link>;
  
    return (
        <header>
          <nav className="nav-wrapper">
              <div className="container">
                  <Link to="/" className="brand-logo">JF</Link>

                  <ul className="right">
                      <li><Link to="/">Main</Link></li>
                      <li><Link to="/items">Items</Link></li>
                      <li>{profileButton}</li>
                  </ul>
              </div>
          </nav>  
        </header>
    );
  }
}

export default NavMenu;
