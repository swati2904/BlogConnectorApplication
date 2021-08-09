import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/routing/PrivateRoute";
import { loadUser } from "./actions/auth";
import setToken from "./utils/setToken";
import Navbar from "./components/blogLayout/Navbar";
import Homepage from "./components/blogLayout/Homepage";
import Toast from "./components/blogLayout/Toast";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Admin from "./components/dashboard/Admin";
// import CreateProfile from "./components/userProfile/CreateProfile";
// import EditProfile from "./components/userProfile/EditProfile";
import AdminProfile from "./components/userProfile/AdminProfile";
import AddExperience from "./components/userProfile/AddExperience";
import AddEducation from "./components/userProfile/AddEducation";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/singleProfile/Profile";
import Posts from "./components/posts/Post";

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
          <div className='body-content'>
            <Switch>
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />

              <PrivateRoute exact path='/admin-profile' component={Admin} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={AdminProfile}
                // component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={AdminProfile}
                // component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/experience'
                component={AddExperience}
              />
              <PrivateRoute exact path='/education' component={AddEducation} />
              <PrivateRoute exact path='/posts' component={Posts} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
