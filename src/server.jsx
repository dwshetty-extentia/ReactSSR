import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import App from './components/container';

const serverOutput = initialState => {
  const store = configureStore(initialState);
  const preloadedState = store.getState();

  const content = renderToString(
    <Provider store={store} >
       <App />
    </Provider>
  );

  return { content, preloadedState };
};

export default serverOutput;