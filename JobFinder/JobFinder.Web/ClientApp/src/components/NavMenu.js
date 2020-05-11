import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {authenticationService} from '../services/authentication.service';
import logoImage from '../images/LogoString-1.png';

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
      <li><a class="large waves-effect waves-light btn-large jf-green-nav-button">Выйти<i class="material-icons right">cancel</i></a></li>
    </Link>
    : 
    <Link to="/auth/login">
      <li><a class="large waves-effect waves-light btn-large jf-green-nav-button">Войти<i class="material-icons right">cloud_done</i></a></li>
    </Link>;
  
    return (
        <header>
          <div class="navbar-fixed">
            <nav className="nav-wrapper jf-gray">
                  <Link to="/" className="brand-logo"><img class="jf-logo-img" src={logoImage}/></Link>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                  <ul className="right hide-on-med-and-down">
                      <li><Link to="/" className='jf-green-text'>Главная</Link></li>
                      <li><Link to="/items" className='jf-green-text'>Вакансии</Link></li>
                      <li>{profileButton}</li>
                  </ul>
            </nav>
          </div>
          <ul class="sidenav" id="mobile-demo">
            <li><Link to="/">Main</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li></li>
          </ul>
        </header>
    );
  }
}

export default NavMenu;
