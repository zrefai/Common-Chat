import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
