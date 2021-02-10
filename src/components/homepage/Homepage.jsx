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
        <div className="m-3 effect-home">
          <Link to="/characters">
            <img src={characters} className="homepage" alt="" />
            <figcaption className="d-flex justify-content-center align-items-center">
              <h2>
                <b className="box">Characters</b>
              </h2>
            </figcaption>
          </Link>
        </div>
        <div className="m-3 effect-home">
          <Link to="/species">
            <img src={species} className="homepage" alt="" />
            <figcaption className="d-flex justify-content-center align-items-center">
              <h2>
                <b className="box">Species</b>
              </h2>
            </figcaption>
          </Link>
        </div>
        <div className="m-3 effect-home">
          <Link to="/planets">
            <img src={planets} className="homepage" alt="" />
            <figcaption className="d-flex justify-content-center align-items-center">
              <h2>
                <b className="box">Planets</b>
              </h2>
            </figcaption>
          </Link>
        </div>
        <div className="m-3 effect-home">
          <Link to="/starships">
            <img src={starships} className="homepage" alt="" />
            <figcaption className="d-flex justify-content-center align-items-center">
              <h2>
                <b className="box">Starships</b>
              </h2>
            </figcaption>
          </Link>
        </div>
        <div className="m-3 effect-home">
          <Link to="/mygalacticleague">
            <img src={league} className="homepage" alt="" />
            <figcaption className="d-flex justify-content-center align-items-center">
              <h2>
                <b className="box">My Galactic League</b>
              </h2>
            </figcaption>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
