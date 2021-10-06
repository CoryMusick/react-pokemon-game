import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  render(){
    const props = this.props;
    // Build hand by pushing 5 random pokemon in to hand array
    const buildHand = (pokemon) => {
      const hand = [];
      for(let i = 0; i < 5; i++){
        let rPokemon = pokemon[Math.floor(Math.random()*pokemon.length)];
        hand.push(rPokemon);
      }
      return hand;
    }
    const player1Hand = buildHand(props.pokemon);
    const player2Hand = buildHand(props.pokemon);
    console.log(player1Hand);

    return (
      <div>
        <div>
          <h2>Player 1</h2>
          <Pokedex playerHand={player1Hand} />  
        </div>
        <div>
          <h2>Player 2</h2>
          <Pokedex playerHand={player2Hand} />
        </div>
      
    </div> 
    )}
}
Pokegame.defaultProps = {
  pokemon: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ],
}
export default Pokegame;