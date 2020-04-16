import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Footer from './Footer';
import '../styles/main.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <>
        <NavMenu />

        <Container>
          <div class="col s10 container-color">
            {this.props.children}
          </div>

        </Container>
      </>
    );
  }
}
