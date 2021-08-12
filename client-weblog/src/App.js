import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { loadUser } from "./actions/auth";
import setToken from "./utils/setToken";
import Routes from "./components/routing/Routes";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";

//redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            {" "}
            <Route exact path='/' component={Homepage} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
