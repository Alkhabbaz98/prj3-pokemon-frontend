import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";

import PokemonList from "./components/List/PokemonList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(response.data);
    setPokemon(response.data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/pokewiki/pokemons"
          element={<PokemonList pokemon={pokemon} />}
        />
        <Route path="/pokewiki/pokemons/:" />
      </Routes>
    </Router>
  );
};

export default App;
