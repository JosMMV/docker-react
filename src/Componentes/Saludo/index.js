import React, { Component } from "react";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";
import { Grid } from "react-bootstrap";

export class Saludo extends Component {
  state = {
    nombreE: this.props.nombreProps,
    mensajeE: this.props.mensajeProps
  };

  manejarNuevoSaludo = datos => {
    this.setState(datos);
  };

  render() {
    const nombreEtiqueta = this.state.nombreE;
    const mensajeEtiqueta = this.state.mensajeE;
    //ó const {nombreEstado} = this.state;
    //y luego <h1>Hola {nombreEstado}!</h1>
    return (
      <Grid>
        <MensajeSaludo nombre={nombreEtiqueta} mensaje={mensajeEtiqueta} />
        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo} />
      </Grid>
    );
  }
}
export default Saludo;
