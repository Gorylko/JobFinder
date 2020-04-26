import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import '../styles/main.css'
import Footer from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <>
        <NavMenu />
          <Container className='content'>
            <div>
              {this.props.children}
            </div>
          </Container>
        <Footer/>
      </>
    );
  }
}
