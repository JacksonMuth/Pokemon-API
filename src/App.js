import React, { useState } from 'react';
import Pokemon from './components/Pokemon';
import './App.css';

function App() {
  const [pokemon, setpokemon] = useState([
    {
      title: "Fetch Pokemon",
      url: "https://pokeapi.co/api/v2/pokemon",
      selected: false
    },
  ]);

  return (
    <div>
      <Pokemon pokemon={ pokemon } setpokemon={ setpokemon }/>
    </div>
  );
}

export default App;
