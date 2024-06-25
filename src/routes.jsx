import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import SinglePost from "pages/SinglePost";
import NoMatch from "pages/NoMatch";
import Random from "pages/Random";
import AllPost from "pages/AllPost";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/post/:id">
          <SinglePost />
        </Route>
        <Route exact path="/random">
          <Random />
        </Route>
        <Route exact path="/all">
          <AllPost />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}
