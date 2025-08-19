import { useState } from "react"
import { useNavigate } from "react-router"


const PokemonTeamForm = ({pokemon}) => {

const [isSubmitting, setIsSubmitting] = useState(false)



// form Data: 
const [pokeTeam, setPokeTeam] = useState([{}])
const [newPokeTeam, setNewPokeTeam] = useState({})


const handleChange = (event) => {
    
    setNewPokeTeam({...newPokeTeam, [event.target.name]: event.target.value})
    console.log(newPokeTeam)
}


const handleSubmit = (event) => {
    event.preventDefault()
    setPokeTeam([...pokeTeam, newPokeTeam])
    console.log('current poke team: ', pokeTeam)

}



return(
    <>
    <h1>Make a Pokemon Team</h1>
    <p>Pokemons Available</p>

    <form onSubmit={handleSubmit}>
    <label htmlFor="pokemon1">Pokemon 1</label>
    <select onChange={handleChange}
        name="pokemon1"
        id="pokemon1"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <label htmlFor="pokemon2">Pokemon 2</label>
    <select onChange={handleChange}
        name="pokemon2"
        id="pokemon2"
    >
   
    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <label htmlFor="pokemon3">Pokemon 3</label>
    <select onChange={handleChange}
        name="pokemon3"
        id="pokemon3"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    
    <label htmlFor="pokemon4">Pokemon 4</label>
    <select onChange={handleChange}
        name="pokemon4"
        id="pokemon4"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />

    <label htmlFor="pokemon5">Pokemon 5</label>
    <select onChange={handleChange}
        name="pokemon5"
        id="pokemon5"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>
    <br />
    <label htmlFor="pokemon6">Pokemon 6</label>
    <select onChange={handleChange}
        name="pokemon6"
        id="pokemon6"
    >

    {pokemon.map((onePoke) => (
        <option multiple value={onePoke.name}>{onePoke.name}</option>
    ))}
    </select>

      
    <button type="submit"> Submit your team </button>
      </form>
    </>
)
}


export default PokemonTeamForm
