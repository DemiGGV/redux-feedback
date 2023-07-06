import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyle';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
