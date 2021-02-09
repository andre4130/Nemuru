import React from "react";
import { Link } from "react-router-dom";
import characters from "../../assets/img/characters.png";
import species from "../../assets/img/species.png";
import league from "../../assets/img/league.png";
import planets from "../../assets/img/planets.png";
import starships from "../../assets/img/starships.png";

const Homepage = () => {
  return (
    <div className="container-fluid d-flex">
      <div className="row d-inline-flex w-100 justify-content-center homepage wrap align-items-center">
        <div className="m-3">
          <Link to="/characters">
            <img src={characters} className="homepage" alt="" />
          </Link>
        </div>
        <div className="m-3">
          <Link to="/species">
            <img src={species} className="homepage" alt="" />
          </Link>
        </div>
        <div className="m-3">
          <Link to="/planets">
            <img src={planets} className="homepage" alt="" />
          </Link>
        </div>
        <div className="m-3">
          <Link to="/starships">
            <img src={starships} className="homepage" alt="" />
          </Link>
        </div>
        <div className="m-3">
          <Link to="/mygalacticleague">
            <img src={league} className="homepage" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
