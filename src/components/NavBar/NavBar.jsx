import { Link } from "react-router";
import "./NavBar.css";
import "../LogoutButton/LogoutButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <p className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuLvq_z6fGcatFZVwO9KBw03rgVetQA-p9Q&s" />{" "}
          PokeWiki
        </p>
        <Link to="pokewiki/poketeam" className="nav-link">
          My Teams
        </Link>
        <Link to="pokewiki/poketeam/new" className="nav-link">
          New Team
        </Link>
        <Link to="user/login" className="nav-link">
          Log in
        </Link>
        <Link to="user/signup" className="nav-link">
          Sign up
        </Link>
        <Link to="/pokewiki/pokemons" className="nav-link">
          Pokemon List
        </Link>
        <LogoutButton></LogoutButton>
      </div>
    </nav>
  );
};

export default NavBar;
