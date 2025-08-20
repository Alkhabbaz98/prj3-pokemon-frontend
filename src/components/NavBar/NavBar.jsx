import { Link } from "react-router";
import "./NavBar.css";
import "../LogoutButton/LogoutButton";
import LogoutButton from "../LogoutButton/LogoutButton";

const NavBar = ({ token, onLogout }) => {
  return (
    <nav className="navbar">
        <p className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuLvq_z6fGcatFZVwO9KBw03rgVetQA-p9Q&s" />{" "}
          PokeWiki
        </p>
        <div className="navbar-container">
        {token ? (
          <>
            <Link to="/pokewiki/poketeam" className="nav-link">
              My Teams
            </Link>
            <Link to="/pokewiki/poketeam/new" className="nav-link">
              New Team
            </Link>
            <Link to="/pokewiki/pokemons" className="nav-link">
              Pokemon List
            </Link>
            <LogoutButton onLogout={onLogout}></LogoutButton>
          </>
        ) : (
          <>
            <Link to="/user/login" className="nav-link">
              Log in
            </Link>
            <Link to="/user/signup" className="nav-link">
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
