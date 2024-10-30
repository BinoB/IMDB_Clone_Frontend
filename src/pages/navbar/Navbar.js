import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="IMDb Logo"
          />
        </Link>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search IMDb" />
      </div>
      <div className="navbar__links">
        {/* <Link to="/">Movies</Link>
        <Link to="/">TV Shows</Link>
        <Link to="/">Celebrities</Link> */}
        <ShowOnLogout>
        {/* <Link to="/register">Register</Link> */}
        </ShowOnLogout>
        <ShowOnLogout>
        <button className="nav-button">
          <Link to="/login">Login</Link>
        </button>
        </ShowOnLogout>
        <ShowOnLogin>
        <button className="nav-button">
          <Link to="/dashboard">Dashboard</Link>
        </button>
        </ShowOnLogin>
      </div>
    </nav>
  );
};

export default Navbar;
