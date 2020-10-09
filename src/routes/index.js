import React from "react";
//For Routing
import { Route, BrowserRouter as Router } from "react-router-dom";

//For Components
import Todo from "./Todo";
import Login from "./Login";
import Register from "./SignUp";

function AppRoutes() {
  return (
    <div className="AppRoute">
      <Router>
        <Route path="/" exact component={Todo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default AppRoutes;
