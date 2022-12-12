import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from 'components/App/App';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
