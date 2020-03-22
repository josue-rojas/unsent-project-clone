import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/:id">
            <div>Post page</div>
          </Route>
          <Route exact path="/new">
            <div>New post</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
