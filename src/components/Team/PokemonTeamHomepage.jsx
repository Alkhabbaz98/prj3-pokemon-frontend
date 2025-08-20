import axios from "axios";
import { useState } from "react";
import { Link } from "react-router";



const PokemonTeamHomepage = () => {
  const baseUrl = import.meta.env.VITE_BACK_END_SERVER_URL
  const [test, setTest] = useState([])
  const testFun = async () => {
    await axios.showTeam(`${baseUrl}/pokewiki/new`)
  }
  
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
  return <div></div>;
};

export default PokemonTeamHomepage;
