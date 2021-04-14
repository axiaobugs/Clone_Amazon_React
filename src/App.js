import Header from "./component/header/Header";
import Home from "./component/home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from "./component/checkout/Checkout";
import Login from "./component/auth/Login";
import Register from './component/auth/Register'
import React,{useEffect} from "react";


function App() {

    useEffect(()=>{

    },[])

    return (
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
    );
}

export default App;
