import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthProvider';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Login/Signup';

const RouterApp = () => {
  return (
    
      <AuthProvider>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </AuthProvider>

  );
};

export default RouterApp;