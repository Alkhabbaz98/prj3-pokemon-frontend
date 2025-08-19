import { useState } from "react"
import { useNavigate } from "react-router"

const PokemonTeamForm = ({pokemon}) => {

const [pokeTeam, setPokeTeam] = useState([])

return(
    <>
    <h1>Make a Pokemon Team</h1>
    <p>Pokemons Available</p>
    <form>

    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <select
        name="pokemon"
        id="pokemon"
    >
   
    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    
        <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
        <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    
      
      </form>
    </>
)
}


export default PokemonTeamForm
