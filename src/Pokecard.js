import React, { Component } from 'react';
import "./Pokecard.css";

class Pokecard extends Component {
  render(){
    const pokemon = this.props.pokemon;
    // Pad ID for image request
    const paddedID = (pokemon.id+"").padStart(3,"0");
    
    return (
      <div className={"Pokecard Pokecard-"+pokemon.type}>
        <div className="Pokecard-name">
          {pokemon.name}
        </div>
        <img src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+paddedID+".png"} alt={pokemon.name}/>
        <div>
          Experience: {pokemon.base_experience}
        </div>
        <div>
        Type: {pokemon.type}
        </div>
      </div>
    )
  };
}

export default Pokecard;