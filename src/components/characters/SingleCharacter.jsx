import React, { useState, useEffect } from "react";

//STYLING
import { Card, Button } from "react-bootstrap";
import fav from "../../assets/svg/falcon_yellow.svg";
import noFav from "../../assets/svg/falcon_yellow_nofav.svg";

const SingleCharacter = ({
  character,
  index,
  getSpecie,
  getStarship,
  handleFavourites,
}) => {
  return (
    <div>
      <Card key={index} bg="dark" text="white">
        <Card.Body>
          <Card.Title>
            <h3>
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
              <b>Specie: </b> {getSpecie(character)}
            </div>
          </Card.Text>
          <Card.Text>
            <div className="d-inline-flex">
              <b>Starship(s): </b> {getStarship(character)}
            </div>
          </Card.Text>
          <Card.Text>
            <div className="d-inline-flex">
              <b>Planet: &nbsp;</b>{" "}
              {character.homeworld.startsWith("http")
                ? " Planets are loading..."
                : ` ${character.homeworld}`}
            </div>
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-end m-3">
          <div
            className="d-column-flex justify-content-end"
            onClick={() => handleFavourites(index)}
          >
            {character.isFav ? (
              <img src={fav} alt="falcon" className="fav-icon" />
            ) : (
              <img src={noFav} alt="falcon" className="fav-icon" />
            )}
          </div>
          {/* <Button onClick={() => handleFavourites(index)}>
          Add to favourites
        </Button> */}
        </div>
      </Card>
    </div>
  );
};

export default SingleCharacter;
