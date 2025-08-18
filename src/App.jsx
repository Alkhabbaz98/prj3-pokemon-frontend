import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";

import PokemonList from "./components/List/PokemonList";
import PokemonDetails from "./components/Details/PokemonDetails";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [pokemon, setPokemon] = useState([{}]);
  const getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setPokemon(response.data.results);
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
        <Route
          path="/pokewiki/pokemons/:pokeName"
          element={<PokemonDetails pokemon={pokemon} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
