import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";

const NoMatch = ({ location }) => (
  <div>No route match for {location.pathname}</div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
