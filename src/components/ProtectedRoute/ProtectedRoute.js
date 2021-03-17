import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {
        () => (props.isLogged === true ? <Component {...props} /> : <Redirect to='/' />)
      }
    </Route>
  );
}
export default ProtectedRoute;
