import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom';
import JFReducer from './redusers/JFReducer';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/main.css';
import { createBrowserHistory } from 'history';

const store = createStore(JFReducer);
const history = createBrowserHistory();
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router basename={baseUrl} history={history}>
      <App />
    </Router>
  </Provider>
 ,
  rootElement);
