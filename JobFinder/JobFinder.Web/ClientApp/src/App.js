import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/main/Home';
import './custom.css';
import './styles/main.css';
import ItemMenu from './components/items/ItemMenu';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
          <Route exact path='/' component={Home} />
          <Route path='/items' component={ItemMenu} />
        </Layout>
    );
  }
}