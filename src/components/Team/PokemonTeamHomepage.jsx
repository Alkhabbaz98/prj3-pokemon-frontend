import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { showTeam, deleteTeam } from "../../../lib/api";
import { jwtDecode } from "jwt-decode";

const PokemonTeamHomepage = ({}) => {
  const [teams, setTeams] = useState([]);

  const getAllTeams = async () => {
    const getTeam = await showTeam();
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userTeams = getTeam.filter((team) => team.user === decoded.id);
    setTeams(userTeams);
  };

  const handleDelete = async (id) => {
    const deleted = await deleteTeam(id);
    if (deleted.status === 200) {
      setTeams(teams.filter((team) => team._id !== id));
    }
  };

  useEffect(() => {
    getAllTeams();
  }, []);
  console.log(teams);
  return (
    <>
      {teams.length ? (
        teams.map((element) => {
          return (
            <>
              <p>{element.pokemon1}</p>
              <p>{element.pokemon2}</p>
              <p>{element.pokemon3}</p>
              <p>{element.pokemon4}</p>
              <p>{element.pokemon5}</p>
              <p>{element.pokemon6}</p>
              <button>Edit</button>
              <button onClick={() => handleDelete(element._id)}>Delete</button>
              <br />
            </>
          );
        })
      ) : (
        <h2>You don't have any teams yet.</h2>
      )}
    </>
  );
};

export default PokemonTeamHomepage;
