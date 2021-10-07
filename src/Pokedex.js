import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
  render() {
    const props = this.props;
    const cards = props.playerHand.map((pInfo, index) => {
      return <Pokecard key={index} pokemon={pInfo} />
    })
    
    const pokedex = <div className="Pokedex">
      <div className="Pokedex-cardbox">
        {cards} 
      </div>
      <div className="Pokedex-winbox">
        {props.isWinner ? "Winning Hand" : null}
      </div>
    </div>
    
    return pokedex
  }
}

export default Pokedex;