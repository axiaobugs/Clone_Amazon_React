import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./StateProvider";
import cartReducer ,{initialState} from "./cartReducer";


ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={initialState} reducer={cartReducer}>
          <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

