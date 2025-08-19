import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import "./PokemonList.css";

const PokemonList = ({ pokemon, typeColors }) => {
  const [list, setList] = useState([]);

  const getPokemonList = async () => {
    const details = await Promise.all(
      pokemon.map(async (element) => {
        const response = await axios.get(element.url);
        return response.data;
      })
    );
    setList(details);
  };

  useEffect(() => {
    getPokemonList();
  }, [pokemon]);

  return (
    <>
      <h1 className="title">Generation 1 Pokemon</h1>
      {list ? (
        <div className="poke-container">
          {pokemon.map((onePoke, index) => (
            <Link to={`/pokewiki/pokemons/${onePoke.name}`}>
              <div className="poke-elem" key={onePoke.name}>
                <img
                  className="elem-img"
                  src={list[index]?.sprites?.other["home"]?.front_default}
                />
                <p>#{list[index]?.id}</p>
                <p>{onePoke.name}</p>
                <div className="type-container" key={`${onePoke.name}`}>
                  {list[index]?.types?.map((oneType) => {
                    return (
                      <span
                        key={oneType.type.name}
                        className="type-elem"
                        style={{
                          backgroundColor: typeColors[oneType.type.name],
                        }}
                      >
                        {oneType.type.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <ClipLoader color="red" />
      )}
    </>
  );
};
export default PokemonList;
