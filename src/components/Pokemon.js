import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = props => {
  const { pokemon, setpokemon } = props;
  const [ display, setDisplay ] = useState([])

  const changeTab = (e, i) => {
    const [...curpokemon] = pokemon;

    for( let mon of curpokemon){
      mon.selected = false;
    }

    setDisplay("awaiting response...")

    axios.get(curpokemon[i].url)
        .then(response => {
            setDisplay(response.data.results);
        })
        .catch(error => console.log("an error occurred"));

    curpokemon[i].selected = true;
    setpokemon(curpokemon);

  }

  return (
    <div>
      <div>
        {
          pokemon.map((mon, i) =>
            <button key={i} onClick={ e => changeTab(e, i)}>{mon.title}</button>
          )
        }
      </div>
      <div>
        {
            display === "awaiting response..." ?
            display
            :
            display.map((item, i) =>
                <ul>
                    <li key={i}>{item.name}</li>
                </ul>
            )
        }
      </div>
    </div>
  )
}

export default Pokemon;
