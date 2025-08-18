import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import PokemonList from "./components/List/PokemonList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/pokewiki/pokemons"
          element={<PokemonList pokemon={pokemon} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
