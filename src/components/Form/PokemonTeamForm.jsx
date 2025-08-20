import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { createTeam } from "../../../lib/api";
import "./PokemonTeamForm.css";

const PokemonTeamForm = ({ pokemon }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // form Data:
  const [pokeTeam, setPokeTeam] = useState([]);
  const [newPokeTeam, setNewPokeTeam] = useState({});
  const [selectedPoke, setSelectedPoke] = useState({});

  const handleChange = async (event) => {
    setNewPokeTeam({ ...newPokeTeam, [event.target.name]: event.target.value });
    const url = pokemon.find(
      (onePoke) => onePoke.name === event.target.value
    ).url;
    const response = await axios.get(url);
    setSelectedPoke((element) => ({
      ...element,
      [event.target.name]: response.data,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    setPokeTeam([...pokeTeam, newPokeTeam]);
    console.log("current poke team: ", pokeTeam);

    const response = await createTeam(newPokeTeam);
    if (response.status === 201) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="new-team-title">Create A New Pokemon Team</h1>
      <div className="new-team-card">
        <form onSubmit={handleSubmit}>
          {[
            "pokemon1",
            "pokemon2",
            "pokemon3",
            "pokemon4",
            "pokemon5",
            "pokemon6",
          ].map((pokeTeamMember) => (
            <div key={pokeTeamMember}>
              <label className="team-form-label" htmlFor={pokeTeamMember}>
                {pokeTeamMember}
              </label>
              <select
                className="team-form-select"
                onChange={handleChange}
                name={pokeTeamMember}
                id={pokeTeamMember}
              >
                {pokemon.map((onePoke) => (
                  <option key={onePoke.name} value={onePoke.name}>
                    {onePoke.name}
                  </option>
                ))}
              </select>

              {selectedPoke[pokeTeamMember] ? (
                <div>
                  <img
                    className="team-form-img"
                    src={
                      selectedPoke[pokeTeamMember].sprites.other[
                        "official-artwork"
                      ].front_default
                    }
                  />
                  <br />
                  
                </div>
              ) : null}
            </div>
          ))}

          <button className="team-submit" type="submit">
            Submit your team
          </button>
        </form>
      </div>
    </>
  );
};

export default PokemonTeamForm;
