import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logoIcon" />
      <ul>
        <NavLink to={"/"}>
          <li>Accueil</li>
        </NavLink>

        <NavLink to={"/"}>
          <li>Profil</li>
        </NavLink>

        <NavLink to={"/"}>
          <li>Réglage</li>
        </NavLink>
        <NavLink to={"/"}>
          <li>Communauté</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
