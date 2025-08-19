import { Link } from "react-router";
const PokemonTeamHomepage = () => {
  return (
    <div>
      <Link to="myteam">
        <div>My teams</div>
      </Link>

      <Link to="new">
        <div>Create teams</div>
      </Link>
    </div>
  );
};

export default PokemonTeamHomepage;
