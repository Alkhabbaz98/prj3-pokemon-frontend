import axios from "axios";
import { useState , useEffect } from "react";
import { Link } from "react-router";
import { showTeam , deleteTeam } from "../../../lib/api";


const PokemonTeamHomepage = () => {

  const [teams, setTeams] = useState()
  
  const getAllTeams = async () => {
    const getTeam = await showTeam();
    setTeams(getTeam);
  }

  console.log(teams)
  
  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <>
    {teams?.map(element => {
      return <>
      <p>{element.pokemon1}</p>
      <p>{element.pokemon2}</p>
      <p>{element.pokemon3}</p>
      <p>{element.pokemon4}</p>
      <p>{element.pokemon5}</p>
      <p>{element.pokemon6}</p>
      <button>Edit</button>
      <button onClick={()=>{ const deletedTeam = deleteTeam(element._id); setTeams(teams.filter(()=> element.id!== deletedTeam._id))}}>Delete</button>
      <br />
      </>
    })}
    </>
      
  );
  
};

export default PokemonTeamHomepage;
