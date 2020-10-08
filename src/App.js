import React from "react";
//For Routing
import { Route, BrowserRouter as Router } from "react-router-dom";

//For Components
import Todo from "./components/Todo.js";
import Login from "./components/Login";
import Register from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Todo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
