import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Comp, path, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return user ? <Comp {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
