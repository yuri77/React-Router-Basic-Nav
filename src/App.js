import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path="/" t component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  </div>
);

export default App;
