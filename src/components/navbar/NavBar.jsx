import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

//MEDIA
import rebel from "../../assets/svg/rebel.svg";

const NavBar = ({ favourites }) => {
  const [number, setNumber] = useState(favourites.length);

  useEffect(() => {
    setNumber(favourites.length);
  }, [favourites]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="navbar"
    >
      <Link to="/">
        <img src={rebel} alt="rebel" style={{ height: "50px" }} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="ml-lg-4">
        <Nav className="mr-auto">
          <Link className="navbar-dark navbar-nav nav-link" to="/characters">
            Characters
          </Link>
          <Link className="navbar-dark navbar-nav nav-link" to="/species">
            Species
          </Link>
          <Link className="navbar-dark navbar-nav nav-link" to="/planets">
            Planets
          </Link>
          <Link className="navbar-nav nav-link" to="/starships">
            Starships
          </Link>
          <Link className="navbar-nav nav-link" to="/mygalacticleague">
            My Galactic League
          </Link>
          <div
            style={{
              color: "#FEFFFC",
              fontSize: "1rem",
              positionTop: "2px",
              textShadow: "0 0 10px #fff",
            }}
          >
            {number}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
