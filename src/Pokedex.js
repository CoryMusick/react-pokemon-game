import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
  render() {
    // Assign Props
    const{playerHand, isWinner} = this.props
    
    // Return Pokecard for every pokemon in pokedex. 
    const cards = playerHand.map((pInfo, index) => {
      return <Pokecard key={index} pokemon={pInfo} />
    })
    
    return (
      <div className="Pokedex">
        <div className="Pokedex-cardbox">
          {cards} 
        </div>
        <div className="Pokedex-winbox">
          {isWinner ? "Winning Hand" : null}
        </div>
      </div>
    )
  }
}

export default Pokedex;