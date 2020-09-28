import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home/home";
import About from "./views/About/about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(h) {
    return (
      <HashRouter>
        <Switch>
          <Route exact component={Home} path="/"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
