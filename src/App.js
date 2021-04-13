import Header from "./component/header/Header";
import Home from "./component/home/Home";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from "./component/checkout/Checkout";


function App() {
  return (
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route path="/login">
                      <h1>login</h1>
                  </Route>
                  <Route path="/checkout">
                      <Checkout />
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
