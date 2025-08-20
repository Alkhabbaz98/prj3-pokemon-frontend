import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { showTeam, deleteTeam } from "../../../lib/api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import "./PokemonTeamHomepage.css";

const PokemonTeamHomepage = ({}) => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);

  const getAllTeams = async () => {
    const getTeam = await showTeam();
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const userTeams = getTeam.filter((team) => team.user._id === decoded.id);
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
  return (
    <>
      {teams.length ? (
        <div className="myteam-page">
          <h1 className="myteam-list-header">
            {teams[0].user?.username}'s Pokemon Teams
          </h1>
          <div className="myteam-list">
            {teams.map((element, index) => {
              return (
                <div key={element._id} className="myteam-card">
                  <h2 className="myteam-card-title">Teams {index + 1}:</h2>
                  <ul className="myteam-list-members">
                    <li>{element.pokemon1}</li>
                    <li>{element.pokemon2}</li>
                    <li>{element.pokemon3}</li>
                    <li>{element.pokemon4}</li>
                    <li>{element.pokemon5}</li>
                    <li>{element.pokemon6}</li>
                  </ul>
                  <div className="myteam-buttons">
                    <button
                      onClick={() =>
                        navigate(`/pokewiki/poketeam${element._id}/update`)
                      }
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(element._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h2>You don't have any teams yet.</h2>
      )}
    </>
  );
};

export default PokemonTeamHomepage;
