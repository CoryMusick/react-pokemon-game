import React, { Component } from 'react';
import "./Pokecard.css";

class Pokecard extends Component {
  render(){
    const pokemon = this.props.pokemon;
    // Pad ID w/ zeros for img 
    const paddedID = (pokemon.id+"").padStart(3,"0");

    // Build Pokemon Card
     const buildPokecard = (pokemon, paddedId) => {
      
      // Build JSX Structure 
      const pCard = <div className="Pokecard">
        <div className="Pokecard-name">
          {pokemon.name}
        </div>
        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+paddedId+".png"} alt={pokemon.name}/>
        <div>
          Experience: {pokemon.base_experience}
        </div>
        <div>
        Type: {pokemon.type}
        </div>
      </div>
      return pCard;
    }

    // Build and return card
    const pCard = buildPokecard(pokemon, paddedID);
    return pCard;
  };
}


export default Pokecard;