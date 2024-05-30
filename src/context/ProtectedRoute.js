import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useContext(GlobalContext);

  return user ? (
    <Route {...rest} element={Component} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
