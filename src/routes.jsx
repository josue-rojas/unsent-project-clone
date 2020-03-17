import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <div>Main page</div>
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
