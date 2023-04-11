import React, { Component } from 'react';
import axios from "axios";
import "./RickAndMortyComponent.css";

export class RickAndMortyComponent extends Component {
    constructor() {
        super();
        this.state = {
          cartoon: [],
          errorMessage: "",
        };
      }
      componentDidMount() {
        axios
          .get("https://rickandmortyapi.com/api/character")
          .then((response) => {
            console.log(response);
            this.setState({ cartoon: response.data.results });
          })
          .catch((error) => {
            console.log(error);
            this.setState({ errorMessage: "Error Retrieving Data" });
          });
      }
  render() {
    const { cartoon, errorMessage } = this.state;
    return (
      <div>
        <h1>Rick & Morty</h1>
        {cartoon.length
          ? cartoon.map((cast) => (
              <div className="pictures">
                <h1 className="text">{cast.name}</h1>
                <img src={cast.image}></img>
              </div>
            ))
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    )
  }
}

export default RickAndMortyComponent