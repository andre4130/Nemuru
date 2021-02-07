import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Components

//MEDIA
import rebel from "../../assets/svg/rebel.svg";

const NavBar = () => {
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
          <Link className="navbar-dark navbar-nav nav-link" to="/species">
            Razas
          </Link>
          <Link className="navbar-dark navbar-nav nav-link" to="/characters">
            Personajes
          </Link>
          <Link className="navbar-dark navbar-nav nav-link" to="/planets">
            Planetas
          </Link>
          <Link className="navbar-nav nav-link" to="/starships">
            Starships
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
