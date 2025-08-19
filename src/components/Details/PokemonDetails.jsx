import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./PokemonDetails.css";

const PokemonDetails = ({ typeColors }) => {
  const params = useParams();
  const [thisPokemon, setThisPokemon] = useState();
  const [moves, setMoves] = useState([]);
  const [movesDetails, setMovesDetails] = useState([]);

  const getThisPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.pokeName}`
    );
    // sorting moves by level

    // filter moves to only level up method
    let filteredMoves = response.data.moves.sort((a, b) => {
      return (
        a.version_group_details[0].level_learned_at -
        b.version_group_details[0].level_learned_at
      );
    });

    setMoves(filteredMoves);
    setThisPokemon(response.data);
    getMovesDetails(filteredMoves);
  };
  // getting more details for each moveset
  const getMovesDetails = async (filteredMoves) => {
    let response = await Promise.all(
      filteredMoves.map((element) => {
        return axios.get(element.move.url);
      })
    );
    setMovesDetails(response);
  };

  useEffect(() => {
    getThisPokemon();
  }, []);

  //   console.log(thisPokemon.id);
  return (
    <>
      {thisPokemon ? (
        <div
          className="pokemon-card"
          style={{ borderColor: typeColors[thisPokemon.types[0].type.name] }}
        >
          <h1 className="poke-name-title">{params.pokeName}</h1>
          <div className="poke-header">
            <img
              className="poke-img"
              src={
                thisPokemon?.sprites?.other["official-artwork"]?.front_default
              }
            />
            <div>
              <div className="pokedex-data">
                <h2
                  className="poke-details-title"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                >
                  Pokedex Data
                </h2>
                <ul>
                  <li>Pokedex no. {thisPokemon.id}</li>
                  <hr
                    className="poke-details-hr"
                    style={{
                      borderColor: typeColors[thisPokemon.types[0].type.name],
                    }}
                  />
                  <div className="type-row">
                    <span className="type-label">Type:</span>
                    <div className="type-badges">
                      {thisPokemon.types.map((element) => (
                        <span
                          key={element.type.name}
                          className="type-badge"
                          style={{
                            backgroundColor: typeColors[element.type.name],
                          }}
                        >
                          {element.type.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <hr
                    className="poke-details-hr"
                    style={{
                      borderColor: typeColors[thisPokemon.types[0].type.name],
                    }}
                  />
                  <li>Height: {thisPokemon.height} cm</li>
                  <hr
                    className="poke-details-hr"
                    style={{
                      borderColor: typeColors[thisPokemon.types[0].type.name],
                    }}
                  />
                  <li>Weight: {thisPokemon.weight}00 grams</li>
                  <hr
                    className="poke-details-hr"
                    style={{
                      borderColor: typeColors[thisPokemon.types[0].type.name],
                    }}
                  />
                  <li>Abilities: {thisPokemon.abilities[0].ability.name}</li>
                  <hr
                    className="poke-details-hr"
                    style={{
                      borderColor: typeColors[thisPokemon.types[0].type.name],
                    }}
                  />
                </ul>
              </div>
            </div>
          </div>
          {/* maybe remove poke info div */}
          <div className="poke-info">
            <div className="base-stats">
              <h2
                className="poke-details-title"
                style={{
                  borderColor: typeColors[thisPokemon.types[0].type.name],
                }}
              >
                Base stats
              </h2>
              <ul>
                <li>HP: {thisPokemon.stats[0].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
                <li>Attack: {thisPokemon.stats[1].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
                <li>Defense: {thisPokemon.stats[2].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
                <li>Sp. Atk: {thisPokemon.stats[3].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
                <li>Sp. Def: {thisPokemon.stats[4].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
                <li>Speed: {thisPokemon.stats[5].base_stat}</li>
                <hr
                  className="poke-details-hr"
                  style={{
                    borderColor: typeColors[thisPokemon.types[0].type.name],
                  }}
                />
              </ul>
            </div>
            <div className="moves">
              <h2
                className="poke-details-title"
                style={{
                  borderColor: typeColors[thisPokemon.types[0].type.name],
                }}
              >
                Moves
              </h2>
              <ul>
                {moves.map((element) => {
                  return element.version_group_details[0].move_learn_method
                    .name === "level-up"
                    ? movesDetails.map((levelUpMoveset) => {
                        return element.move.name ===
                          levelUpMoveset.data.name ? (
                          <p>{element.name}</p>
                        ) : null;
                      })
                    : // <li key={element.move.name}>
                      //   {element.move.name} learned at level{" "}
                      //   {element.version_group_details[0].level_learned_at}
                      // </li>
                      null;
                })}
              </ul>
            </div>
            {console.log(
              "details moves:",
              movesDetails[0].data.name,
              " ",
              moves[0].move.name
            )}
          </div>
        </div>
      ) : (
        <ClipLoader color="red" />
      )}
    </>
  );
};

export default PokemonDetails;
