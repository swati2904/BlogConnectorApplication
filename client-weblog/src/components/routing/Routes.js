import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../routing/PrivateRoute";

import Toast from "../blogLayout/Toast";
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import Admin from "../dashboard/Admin";
import AdminProfile from "../userProfile/AdminProfile";
import AddExperience from "../userProfile/AddExperience";
import AddEducation from "../userProfile/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../singleProfile/Profile";
import Posts from "../posts/Post";
import CreatePost from "../posts/CreatePost";
import Post from "../post/Post";
import NotFound from "../blogLayout/NotFound";

const Routes = () => {
  return (
    <div className='body-content'>
      <Toast />
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />

        <PrivateRoute exact path='/admin-profile' component={Admin} />
        <PrivateRoute exact path='/create-profile' component={AdminProfile} />
        <PrivateRoute exact path='/edit-profile' component={AdminProfile} />
        <PrivateRoute exact path='/experience' component={AddExperience} />
        <PrivateRoute exact path='/education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/create-post' component={CreatePost} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
