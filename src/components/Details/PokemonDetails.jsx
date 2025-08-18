import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

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

  console.log(thisPokemon);
  return (
    <>
      <h1>{params.pokeName}</h1>
    </>
  );
};

export default PokemonDetails;
