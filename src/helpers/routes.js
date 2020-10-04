import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "./constants";

export function IsUserRedirect({
  children,
  user,
  loggedInPath,
  ...otherProps
}) {
  // If user logged in, redirect to the route specified through loggedInPath
  return (
    <Route
      {...otherProps}
      render={() => {
        if (!user) return children;
        if (user) return <Redirect to={{ pathname: loggedInPath }} />;
        return null;
      }}
    />
  );
}

export function ProtectedRoute({ children, user, ...otherProps }) {
  return (
    <Route
      {...otherProps}
      render={({ location }) => {
        if (user) return children;
        if (!user)
          return (
            <Redirect
              to={{ pathname: ROUTES.SIGNIN, state: { from: location } }}
            />
          );
        return null;
      }}
    />
  );
}
