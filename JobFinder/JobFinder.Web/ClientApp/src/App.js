import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/main/Home';
import './custom.css';
import './styles/main.css';
import ItemMenu from './components/items/ItemMenu';
import LoginPage from './components/LoginPage';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/items' component={ItemMenu} />
          <Route path='/login' component={LoginPage} />
        </Layout>
    );
  }
}