import React from 'react';
import ReactDOM from 'react-dom/client';
import Phonebook from 'components/App';
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Phonebook />
    </Provider>
  </React.StrictMode>
);
