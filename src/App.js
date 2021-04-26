import React from 'react';
import './Login.css';
import {
  BrowserRouter as Router, Route,
  Switch,
} from 'react-router-dom';
import Customer from "./component/Customer"
import Customerdetail from "./component/Customerdetail"
import Login from "./Login"




export default function App({ props }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact path="/listing" component={Customer} />
        <Route
          exact path="/listing/:id" component={Customerdetail} />

      </Switch>

    </Router>

  )
}