import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from "./StateProvider";
import reducer ,{initialState} from "./Reducer";
import {Account} from "./component/auth/Account";


ReactDOM.render(
  <React.StrictMode>
      <Account>
          <StateProvider initialState={initialState} reducer={reducer}>
              <App />
          </StateProvider>
      </Account>

  </React.StrictMode>,
  document.getElementById('root')
);

