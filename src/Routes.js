import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import NotFound from "./pages/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/posts" component={PostsList} />
      <Route component={NotFound} />
    </Switch>
  );
}
