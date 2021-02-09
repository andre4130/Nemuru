import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Components

//MEDIA
import rebel from "../../assets/svg/rebel.svg";

const NavBar = ({ favourites }) => {
  const [number, setNumber] = useState(favourites.length);

  useEffect(() => {
    console.log("favs changed");
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
            Spieces
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
              color: "red",
              fontSize: "1rem",
              // margin: "5px",
              positionTop: "2px",
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
