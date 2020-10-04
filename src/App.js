import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { ROUTES } from "./helpers/constants";
import SignIn from "./pages/Auth/SignIn";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dash/Dashboard";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
);

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            exact
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            exact
            path={ROUTES.SIGNIN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.DASHBOARD}
            exact
            path={ROUTES.REGISTER}
          >
            <Register />
          </IsUserRedirect>
          <ProtectedRoute user={user} exact path={ROUTES.DASHBOARD}>
            <Dashboard />
          </ProtectedRoute>
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
