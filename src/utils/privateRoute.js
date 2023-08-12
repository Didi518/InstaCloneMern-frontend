import { Navigate, Outlet } from 'react-router-dom';

import { getTokenFromLocalStorage, getUserFromLocalStorage } from './utils';

const PrivateRoute = () => {
  const isAuthenticated = getUserFromLocalStorage && getTokenFromLocalStorage;
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
