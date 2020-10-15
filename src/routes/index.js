import React from "react";
//For Routing
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";

//For Components
import Todo from "./Todo";
import Login from "./Login";
import Register from "./SignUp";
import history from "../history"

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...props}
      render={() => {
        if (token !== null) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  );
};

const NonPrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...props}
      render={() => {
        if (token === "" || token === null) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/dashboard" />;
        }
      }}
    />
  );
};

function AppRoutes() {
  return (
    <Router history={history}>
      <Switch>
        <NonPrivateRoute exact path="/" component={Login} />
        <NonPrivateRoute exact path="/login" component={Login} />
        <NonPrivateRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/dashboard" component={Todo} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
