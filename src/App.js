import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { ROUTES } from "./helpers/constants";
import { useAuth } from "./hooks";
import SignIn from "./pages/Auth/SignIn";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header"
import Lobby from "./pages/ChatLobby/Lobby";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
);

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.LOBBY}
            exact
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.LOBBY}
            exact
            path={ROUTES.SIGNIN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.LOBBY}
            exact
            path={ROUTES.REGISTER}
          >
            <Register />
          </IsUserRedirect>
          <ProtectedRoute user={user} exact path={ROUTES.LOBBY}>
            <Lobby />
          </ProtectedRoute>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
