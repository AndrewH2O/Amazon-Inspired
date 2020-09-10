import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/Header.css";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./dataLayer/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  // listener who is logged in
  useEffect(() => {
    // will only run once when the app component loads...
    // observes auth login logout
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>> ', authUser);
      if (authUser) {
        // the user logged in or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
