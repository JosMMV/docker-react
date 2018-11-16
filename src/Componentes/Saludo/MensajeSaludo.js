import React from "react";

export class MensajeSaludo extends React.Component {
  render() {
    const { nombre, mensaje } = this.props;
    return (
      <div>
        <h1>Hola {nombre}!</h1>
        <p>{mensaje}</p>
      </div>
    );
  }
}

export default MensajeSaludo;
