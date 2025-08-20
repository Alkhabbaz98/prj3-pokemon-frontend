import { showTeamById, updateTeam } from "../../../lib/api";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const TeamEdit = ({ pokemon }) => {
  const params = useParams();
  const [thisTeam, setThisTeam] = useState();
  const [pokeTeam, setPokeTeam] = useState([]);
  const [selectedPoke, setSelectedPoke] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = async (event) => {
    setThisTeam({ ...thisTeam, [event.target.name]: event.target.value });
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

    setPokeTeam([...pokeTeam, thisTeam]);
    console.log("added success, current poke team: ", pokeTeam);

    const response = await updateTeam(params.teamId, thisTeam);
    if (response.status === 200) {
      setIsSubmitting(false);
    }
    navigate("/pokewiki/poketeam");
  };

  const getThisTeam = async (id) => {
    const team = await showTeamById(id);
    setThisTeam(team);
    console.log(team);
  };

  useEffect(() => {
    getThisTeam(params.teamId);
  }, [params.teamId]);

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
                value={thisTeam?.[pokeTeamMember] || ""}
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

export default TeamEdit;
