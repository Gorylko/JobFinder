import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import '../styles/main.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <>
        <NavMenu />

        <Container>
          <div>
            {this.props.children}
          </div>

        </Container>
      </>
    );
  }
}
