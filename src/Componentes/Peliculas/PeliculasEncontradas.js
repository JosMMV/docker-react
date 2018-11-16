import React, { Component } from "react";
import { Media, Label, Button } from "react-bootstrap";

export class PeliculasEncontradas extends Component {
  render() {
    return (
      <div>
        {this.props.peliculas.map(pelicula => (
          <Media key={pelicula.trackId}>
            <Media.Left>
              <img src={pelicula.artworkUrl100} alt="pelicula" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                {pelicula.trackName}
                <small>Género: {pelicula.primaryGenreName}</small>
                <Label>{pelicula.contentAdvisoryRating}</Label>
              </Media.Heading>
              <p>{pelicula.longDescription}</p>
              <Button bsSize="xsmall" href={pelicula.previewUrl}>
                Ver
              </Button>
            </Media.Body>
          </Media>
        ))}
      </div>
    );
  }
}
export default PeliculasEncontradas;
