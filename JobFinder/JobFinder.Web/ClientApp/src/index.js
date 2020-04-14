import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JFReducer from './redusers/JFReducer';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/main.css';

const store = createStore(JFReducer);
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>
 ,
  rootElement);
