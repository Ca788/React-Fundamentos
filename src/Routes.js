import React from "react";
import { useTransition, animated } from "react-spring";

import { Route, Switch, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import PostsList from "./pages/PostsList";
import NotFound from "./pages/NotFound";
import PostId from "./pages/Post";

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transfrom: "translateY(50px)", position: "relative" },
    enter: { opacity: 1, transfrom: "translateY(0)", position: "absolute" },
    leave: { opacity: 0, transfrom: "translateY(50px)", position: "absolute" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={PostsList} />
        <Route path="/posts/:id" component={PostId} />
        <Route component={NotFound} />
      </Switch>
    </animated.div>
  ));
}
