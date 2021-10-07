import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
  render() {
    // Assign Props
    const{playerHand, isWinner, exp, playerID } = this.props
    
    // Return Pokecard for every pokemon in pokedex. 
    const cards = playerHand.map((pInfo, index) => {
      return <Pokecard key={index} pokemon={pInfo} />
    })
    
    return (
      <div className="Pokedex">
        <h2>Player {playerID} - Pokedex</h2>
        <h3>EXP : {exp}</h3>
          {isWinner ? <h4 className="Pokedex-wintext">Winning Hand</h4> : null}
        <div className="Pokedex-cardbox">
          {cards} 
        </div>
      </div>
    )
  }
}

export default Pokedex;