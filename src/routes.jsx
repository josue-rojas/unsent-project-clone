import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import SinglePost from "pages/SinglePost";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/:id">
            <SinglePost />
          </Route>
          <Route exact path="/new">
            <div>New post</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
