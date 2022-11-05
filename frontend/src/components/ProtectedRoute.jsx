import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, loggedIn }) => {
  return loggedIn ? children : <Redirect to="/sign-in" />;
};

export default ProtectedRoute;
