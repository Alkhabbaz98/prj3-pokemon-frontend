import { Link } from "react-router";

const PokemonList = ({ pokemon }) => {
  return (
    <>
      <h1>Pokemons Available</h1>
      <ul>
        {pokemon.map((onePoke) => (
          <li key={onePoke.name}>
            <Link to={`/pokewiki/pokemons/${onePoke.name}`}>
              {onePoke.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PokemonList;
