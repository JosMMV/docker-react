import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export class FormaSaludo extends React.Component {
  alEnviarForma = e => {
    let datos = {};
    const nomb = e.target.miNombre.value;
    const mens = e.target.miMensaje.value;
    e.preventDefault();
    if (typeof nomb === "string" && nomb.length > 2) {
      datos.nombreE = nomb;
      e.target.miNombre.value = "";
    }
    if (typeof mens === "string" && mens.length > 2) {
      datos.mensajeE = mens;
      e.target.miMensaje.value = "";
    }
    this.props.alObtenerNuevoSaludo(datos);
  };

  render() {
    return (
      <form onSubmit={this.alEnviarForma}>
        <FormGroup>
          <ControlLabel>Nombre</ControlLabel>
          <FormControl type="text" id="nombre" name="miNombre" />
          <ControlLabel>Mensaje</ControlLabel>
          <FormControl
            componentClass="textarea"
            id="mensaje"
            name="miMensaje"
          />
          <Button type="submit">Saludar</Button>
        </FormGroup>
      </form>
    );
  }
}

export default FormaSaludo;
