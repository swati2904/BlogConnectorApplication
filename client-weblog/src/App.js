import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Homepage} />
      <section className='container'>
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
