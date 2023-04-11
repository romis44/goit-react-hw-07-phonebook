import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Provider } from 'react-redux';
import './index.scss';
import { store } from 'redux/store';
import App from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);