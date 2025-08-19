import { useState } from "react"
import { useNavigate } from "react-router"


const PokemonTeamForm = ({pokemon}) => {

const [isSubmitting, setIsSubmitting] = useState(false)



// form Data: 
const [pokeTeam, setPokeTeam] = useState({
pokemon1:'',
pokemon2:'',
pokemon3:'',
pokemon4:'',
pokemon5:'',
pokemon6:''

})


const handleSubmit = async (event) => {
    setPokeTeam({...pokeTeam, [event.target.name]: event.target.value})
    const response = await create(pokeTeam)

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
