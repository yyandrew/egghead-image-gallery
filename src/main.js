import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery';

import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
