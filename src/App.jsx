import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";

import PokemonList from "./components/List/PokemonList";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/User/LoginForm";


const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const getPokemon = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    console.log(response.data);
    setPokemon(response.result);
  };

// Auth:
const [token, setToken] = useState(localStorage.getItem('token'))

function handleLogin(newToken) {
  setToken(newToken)
}

function handleLogout() {
  setToken(null)
  localStorage.removeItem('token')
}


if (token) {
  const decodedToken = jwtDecode(token)
  console.log(decodedToken)
}

// ===========
  useEffect(() => {
    getPokemon();
  }, []);







  return (
    <Router>
      <NavBar />
      <>
      {token ? <LogoutButton onLogout={handleLogout} /> : null}
      </>
      <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin}/>}/>
        <Route path="/signup" element={<SignUp />} />
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