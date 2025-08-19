import { Link } from "react-router";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <p className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuLvq_z6fGcatFZVwO9KBw03rgVetQA-p9Q&s" />{" "}
          PokeWiki
        </p>
        <Link to="user/login" className="nav-link">
          Log in
        </Link>
        <Link to="user/signup" className="nav-link">
          Sign up
        </Link>
        <Link to="/pokewiki/pokemons" className="nav-link">
          Pokemon List
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
