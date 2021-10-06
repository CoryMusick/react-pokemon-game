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

    // Get total experience from playerhand 
    const getTotalExp = (hand) => {
      let total = 0;
      hand.map(p => {
        total += p.base_experience;
      })
      return total;
    }
    const player1Hand = buildHand(props.pokemon);
    const player2Hand = buildHand(props.pokemon);
    const player1EXP = getTotalExp(player1Hand);
    const player2EXP = getTotalExp(player2Hand);

    return (
      <div>
        <div>
          <h2>Player 1 - Team EXP: {player1EXP.toString()} </h2>
          <Pokedex playerHand={player1Hand} isWinner={player1EXP > player2EXP} />
        </div>
        <div>
          <h2>Player 2 - Team EXP: {player2EXP.toString()} </h2>
          <Pokedex playerHand={player2Hand} isWinner={player2EXP > player1EXP}/>
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