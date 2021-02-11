import React from "react";

//STYLING
import { Card } from "react-bootstrap";
import falcon from "../../assets/svg/falcon_yellow_nofav.svg";
import LoadingPlanet from "../loading/LoadingPlanet";

const SingleCharacter = ({ character, index, handleFavourites }) => {
  return (
    <div>
      <Card key={index} bg="dark" text="white">
        <Card.Body>
          <Card.Title>
            <h3 style={{ color: "#ffe81f" }}>
              <b>{character.name}</b>
            </h3>
          </Card.Title>
          <Card.Text>
            <b>Height: </b> {character.height}
          </Card.Text>
          <Card.Text>
            <b>Gender: </b> {character.gender}
          </Card.Text>
          <Card.Text>
            <div className="d-inline-flex">
              <b>Planet: &nbsp;</b>
              {character.homeworld.startsWith("http") ? (
                <LoadingPlanet />
              ) : (
                ` ${character.homeworld}`
              )}
            </div>
          </Card.Text>
          {character.species[0] === undefined ||
          character.species[0].startsWith("http") ? null : (
            <Card.Text>
              <div className="d-inline-flex">
                <b>Specie:&nbsp;</b>
                {` ${character.species}`}
              </div>
            </Card.Text>
          )}
          {character.starships[0] === undefined ||
          character.starships[0].startsWith("http") ? null : (
            <Card.Text>
              <div className="d-inline-flex">
                <b>Starship:&nbsp;</b>
                {` ${character.starships}`}
              </div>
            </Card.Text>
          )}
        </Card.Body>
        <div className="d-flex justify-content-end m-3">
          <div
            className="d-column-flex justify-content-end"
            onClick={() => handleFavourites(index)}
          >
            <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>
              Add to League
            </p>
            <div className="d-flex justify-content-center">
              <img src={falcon} alt="falcon" className="fav-icon" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleCharacter;
