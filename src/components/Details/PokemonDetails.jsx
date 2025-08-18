import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const PokemonDetails = () => {
  const params = useParams();
  const [thisPokemon, setThisPokemon] = useState();

  const getThisPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokeName}`
    );
    setThisPokemon(response.data);
  };

  useEffect(() => {
    getThisPokemon();
  }, []);

  return (
    <>
      <h1>{params.pokeName}</h1>
      {thisPokemon ? (
        <div>
          <p>Abilities: {thisPokemon.abilities[0].ability.name}</p>
        </div>
      ) : (
        <ClipLoader color="red" />
      )}
    </>
  );
};

export default PokemonDetails;
