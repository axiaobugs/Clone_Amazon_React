import Header from "./component/header/Header";
import Home from "./component/home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from "./component/checkout/Checkout";
import Login from "./component/auth/Login";
import Register from './component/auth/Register'
import React from "react";
import {Account} from "./component/auth/Account";


function App() {

    return (
        <Account>
          <Router>
              <div className="App">
                  <Switch>
                      <Route path="/login" component={Login}/>
                      <Route path="/register" component={Register}/>
                      <Route path="/checkout">
                          <Header/>
                          <Checkout />
                      </Route>
                      <Route path="/">
                          <Header/>
                          <Home/>
                      </Route>
                  </Switch>
              </div>
          </Router>
        </Account>
    );
}

export default App;
