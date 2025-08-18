import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const PokemonList = ({ pokemon }) => {
  const [list, setList] = useState([]);

  const getPokemonList = async () => {
    const details = await Promise.all(
      pokemon.map(async (element) => {
        const response = await axios.get(element.url);
        return response.data;
      })
    );
    setList(details);
    console.log("details", details[0]);
  };

  useEffect(() => {
    getPokemonList();
  }, [pokemon]);

  return (
    <>
      <h1>Generation 1 Pokemon</h1>
      <div>
        {pokemon.map((onePoke) => (
          <Link to={`/pokewiki/pokemons/${onePoke.name}`}>
            <div key={onePoke.name}>{onePoke.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default PokemonList;
