import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Toast from "./components/blogLayout/Toast";
import Admin from "./components/dashboard/Admin";
import { loadUser } from "./actions/auth";
import setToken from "./utils/setToken";
import PrivateRoute from "./components/routing/PrivateRoute";

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
          <Route exact path='/' component={Homepage} />
          <Toast />
          <div style={{ height: "90vh" }}>
            <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/admin-profile' component={Admin} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
