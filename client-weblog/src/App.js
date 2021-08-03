import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Toast from "./components/blogLayout/Toast";

//redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Homepage} />
        <Toast />
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
