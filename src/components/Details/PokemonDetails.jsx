import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const PokemonDetails = () => {
  const params = useParams();
  const [thisPokemon, setThisPokemon] = useState();
  const [moves, setMoves] = useState([]);

  const getThisPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokeName}`
    );
    let filteredMoves = response.data.moves.sort((a, b) => {
      return (
        a.version_group_details[0].level_learned_at -
        b.version_group_details[0].level_learned_at
      );
    });
    console.log(filteredMoves);
    setMoves(filteredMoves);
    setThisPokemon(response.data);
  };

  useEffect(() => {
    getThisPokemon();
  }, []);

  //   console.log(thisPokemon.id);
  return (
    <>
      <h1>{params.pokeName}</h1>
      {thisPokemon ? (
        <div className="poke-info">
          <div>
            <h2>Pokedex Data</h2>
            <ul>
              <li>Pokedex no. {thisPokemon.id}</li>
              <hr />
              <p>
                Type:
                {thisPokemon.types.map((element) => {
                  return <div key={element.type.name}>{element.type.name}</div>;
                })}
              </p>
              <hr />
              <li>Height: {thisPokemon.height} cm</li>
              <hr />
              <li>Weight: {thisPokemon.weight}00 grams</li>
              <hr />
              <li>Abilities: {thisPokemon.abilities[0].ability.name}</li>
              <hr />
            </ul>
          </div>
          <div>
            <h2>Base stats</h2>
            <ul>
              <li>HP: {thisPokemon.stats[0].base_stat}</li>
              <hr />
              <li>Attack: {thisPokemon.stats[1].base_stat}</li>
              <hr />
              <li>Defense: {thisPokemon.stats[2].base_stat}</li>
              <hr />
              <li>Sp. Atk: {thisPokemon.stats[3].base_stat}</li>
              <hr />
              <li>Sp. Def: {thisPokemon.stats[4].base_stat}</li>
              <hr />
              <li>Speed: {thisPokemon.stats[5].base_stat}</li>
              <hr />
            </ul>
          </div>
          <div>
            <h2>Moves</h2>
            <ul>
              {moves.map((element) => {
                return element.version_group_details[0].move_learn_method
                  .name === "level-up" ? (
                  <li key={element.move.name}>
                    {element.move.name} learned at level{" "}
                    {element.version_group_details[0].level_learned_at}
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      ) : (
        <ClipLoader color="red" />
      )}
    </>
  );
};

export default PokemonDetails;
