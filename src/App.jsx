import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import axios from "axios";
import {jwtDecode} from 'jwt-decode'


import PokemonList from "./components/List/PokemonList";
import PokemonDetails from "./components/Details/PokemonDetails";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/User/LoginForm";
import SignUp from "./components/User/SignupForm";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LogoutButton from "./components/LogoutButton/LogoutButton";
import PokemonTeamForm from "./components/Form/PokemonTeamForm";


const App = () => {
  const [pokemon, setPokemon] = useState([{}]);
  const getPokemon = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    console.log(response.data.results)
    setPokemon(response.data.results);
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
        <Route path="/user/login" element={<LoginForm onLogin={handleLogin}/>}/>
        <Route path="/user/signup" element={<SignUp />} />
        <Route
          path="/pokewiki/pokemons"
          element={<PokemonList pokemon={pokemon} />}
        />
        <Route 
        
          path="pokewiki/pokeTeam" 
          element={<PokemonTeamForm setPokemon ={setPokemon} pokemon={pokemon} />}
        
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