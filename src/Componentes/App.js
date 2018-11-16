import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from "react-router-dom/Route";
import Saludo from "./Saludo/index";
import Peliculas from "./Peliculas/index";
import PaginaNoExiste from "./PaginaNoExiste";
import Menu from "./Menu";
import Inicio from "./Inicio";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/saludar" component={Saludo} />
            <Route path="/peliculas" component={Peliculas} />
            <Route component={PaginaNoExiste} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
