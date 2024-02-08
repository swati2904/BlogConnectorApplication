import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/blogLayout/Navbar';
import Homepage from './components/blogLayout/Homepage';
import Toast from './components/blogLayout/Toast';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Admin from './components/dashboard/Admin';
import AdminProfile from './components/userProfile/AdminProfile';
import AddExperience from './components/userProfile/AddExperience';
import AddEducation from './components/userProfile/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/singleProfile/Profile';
import Posts from './components/posts/Post';
import CreatePost from './components/posts/CreatePost';
import Post from './components/post/Post';
import NotFound from './components/blogLayout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';

//redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setToken from './utils/setToken';

import './App.css';

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
        <Navbar />
        <Toast />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          <Route path='profiles' element={<Profiles />} />
          <Route path='profile/:id' element={<Profile />} />

          <Route
            path='/admin-profile'
            element={<PrivateRoute component={Admin} />}
          />
          <Route
            path='/create-profile'
            element={<PrivateRoute component={AdminProfile} />}
          />
          <Route
            path='/edit-profile'
            element={<PrivateRoute component={AdminProfile} />}
          />
          <Route
            path='/experience'
            element={<PrivateRoute component={AddExperience} />}
          />
          <Route
            path='/education'
            element={<PrivateRoute component={AddEducation} />}
          />
          <Route path='/posts' element={<PrivateRoute component={Posts} />} />
          <Route
            path='/create-post'
            element={<PrivateRoute component={CreatePost} />}
          />
          <Route
            path='/posts/:id'
            element={<PrivateRoute component={Post} />}
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
