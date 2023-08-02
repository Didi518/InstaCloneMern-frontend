import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ForgotPassword from './components/forgotPassword/ForgotPassword';
import MainLayout from './components/mainLayout/MainLayout';
import Home from './components/home/Home';
import ResetPassword from './components/resetPassword/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/mdp-oubli" element={<ForgotPassword />} />
        <Route path="/reinitialisation/:token" element={<ResetPassword />} />
        <Route element={<MainLayout />}>
          <Route exact path="/accueil" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
