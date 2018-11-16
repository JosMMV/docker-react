import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";

export class BuscarPelicula extends Component {
  render() {
    return (
      <Form inline onSubmit={this.props.buscandoPelicula}>
        <FormGroup>
          <FormControl
            type="text"
            name="nombrePelicula"
            placeholder="¿Cuál película buscas?"
          />
        </FormGroup>
        <Button type="submit">Aceptar</Button>
      </Form>
    );
  }
}
export default BuscarPelicula;
