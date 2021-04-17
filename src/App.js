import Header from "./component/header/Header";
import Home from "./component/home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from "./component/checkout/Checkout";
import Login from "./component/auth/Login";
import Register from './component/auth/Register'
import React, {useEffect,useState,useContext} from "react";
import {AccountContext} from "./component/auth/Account";
import {useStateValue} from "./StateProvider";


function App() {
    const [status,setStatus]=useState(false);
    const {getSession} = useContext(AccountContext);

    const [{},dispatch]=useStateValue();

    useEffect(()=>{
        getSession()
            .then(session=>{
                // prepare the status
                setStatus(true);
                // push the data to the data layer
                dispatch({
                    type:"SET_USER",
                    user:session.idToken
                })

            })
            .catch(err=>{
                setStatus(false);
                dispatch({
                    type:"SET_USER",
                    user:null
                })
            })
    },[status])
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
