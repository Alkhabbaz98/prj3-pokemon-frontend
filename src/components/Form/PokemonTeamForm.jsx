import { useState } from "react"
import { useNavigate } from "react-router"

const PokemonTeamForm = ({pokemon}) => {
// form Data: 
const [pokeTeam, setPokeTeam] = useState([])


const handleSubmit = (event) => {

    setPokeTeam({...pokeTeam, [event.target.name]: event.target.value})
}
return(
    <>
    <h1>Make a Pokemon Team</h1>
    <p>Pokemons Available</p>
    <form >
    <label htmlFor="name">Pokemon 1</label>
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <label htmlFor="name">Pokemon 2</label>
    <select
        name="pokemon"
        id="pokemon"
    >
   
    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <label htmlFor="name">Pokemon 3</label>
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    
    <label htmlFor="name">Pokemon 4</label>
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />

    <label htmlFor="name">Pokemon 5</label>
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <label htmlFor="name">Pokemon 6</label>
    <select
        name="pokemon"
        id="pokemon"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>

      
    <button onClick={handleSubmit}> Submit your team </button>
      </form>
    </>
)
}


export default PokemonTeamForm
