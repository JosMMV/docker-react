import React, { Component } from "react";
import { BuscarPelicula } from "./BuscarPelicula";
import { Grid, PageHeader, Row } from "react-bootstrap";
import PeliculasEncontradas from "./PeliculasEncontradas";

export class Película extends Component {
  state = {
    peliculas: [],
    estaCargando: false
  };

  buscandoPelicula = async e => {
    const nombrePelicula = e.target.elements.nombrePelicula.value;
    e.preventDefault();
    const api_fetch = await fetch(
      `https://itunes.apple.com/search?term=${nombrePelicula}&media=movie`
    );
    this.setState({ estaCargando: true });
    const peliculas = await api_fetch.json();
    this.setState({ peliculas: peliculas.results, estaCargando: false });
    console.log(this.state.peliculas);
  };

  render() {
    if (this.state.estaCargando) {
      return <p>Cargando...</p>;
    }
    return (
      <Grid>
        <Row>
          <PageHeader>Lista de películas</PageHeader>
          <BuscarPelicula buscandoPelicula={this.buscandoPelicula} />
        </Row>
        <Row>
          <br />
          <PeliculasEncontradas peliculas={this.state.peliculas} />
        </Row>
      </Grid>
    );
  }
}
export default Película;
