import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import WebFont from 'webfontloader';

import './index.css';

import App from './App';

WebFont.load({
  google: {
    families: [
      'Titillium Web:300,400,800',
      'Roboto:400,800',
      'sans-serif'
    ]
  }
});

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);