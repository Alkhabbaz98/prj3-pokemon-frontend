import { Link } from "react-router"

const PokemonList = (props) =>{
    return (
        <>
        <h1>Pokemons Available</h1> 
        <ul>
        {props.pokemon.map((onePoke) => (
            <li>
                <Link to={`/pokewiki/pokemon/${onePoke.id}`}>
                {onePoke.name}
                </Link>
            </li>


        ))}

        </ul>
        
        </>

    )
}
export default PokemonList