import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import App from './components/container';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);

/*
  hydrate the page to make sure both server and client side pages are identical. 
  This includes markup checking, react comments to identify elements and more.
*/

ReactDOM.hydrate(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
);