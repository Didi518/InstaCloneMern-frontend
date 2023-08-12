import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import MainLayout from './components/mainLayout/MainLayout';
import Home from './components/home/Home';
import ResetPassword from './components/resetPassword/ResetPassword';
import CreatePost from './components/createPost/CreatePost';
import PrivateRoute from './utils/privateRoute';
import Profile from './components/profile/Profile';
import UserProfile from './components/profile/UserProfile';
import Explore from './components/explore/Explore';

function App() {
  useEffect(() => {
    if (localStorage.getItem('token') && localStorage.getItem('utilisateur')) {
      <Navigate to="/accueil" />;
    } else {
      <Navigate to="/" />;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/inscription" element={<Register />} />
        <Route path="/mdp-oubli" element={<ForgotPassword />} />
        <Route path="/reinitialisation/:token" element={<ResetPassword />} />
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/accueil" element={<Home />} />
            <Route path="/nouveau-post" element={<CreatePost />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/profil/:userId" element={<UserProfile />} />
            <Route path="/explorer" element={<Explore />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
