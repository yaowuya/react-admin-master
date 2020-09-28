import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import About from "./views/About/about";
import Login from "./views/login/login";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(h) {
    return (
      <HashRouter>
        <Switch>
          <Route exact component={Login} path="/"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
