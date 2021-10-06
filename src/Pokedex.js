import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
  render() {
    const props = this.props;
    const cards = props.playerHand.map((pInfo, index) => {
      return <Pokecard key={index} pokemon={pInfo} />
    }) 
    
    return <div className="Pokedex">
      {cards}
    </div>
  }
}

export default Pokedex;