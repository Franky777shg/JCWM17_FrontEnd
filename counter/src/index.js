import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducer from './redux/reducers'

const globalState = createStore(allReducer)

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById('root')
);
