import React, { useState, useEffect } from "react";

//COMPONENTS
import Loading from "../loading/Loading";

//STYLING
import { Container, CardColumns, Card, Button } from "react-bootstrap";

const Characters = ({ characters, species, planets, starships }) => {
  const handleFavourites = (i) => {
    console.log(i);
  };

  const getSpecie = (character) => {
    const specieData = character.species;
    if (specieData.length > 0) {
      var res = specieData[0].split("/");
      var specieID = res[5];
    }

    return (
      <>
        {species[specieID] === undefined ? (
          <p>&nbsp;No information</p>
        ) : (
          <p>&nbsp;{species[specieID]}</p>
        )}
      </>
    );
  };

  const charactersList = characters.map((character, index) => (
    <Card key={index} bg="dark" text="white">
      <Card.Body>
        <Card.Title>
          <h3>
            <b>{character.name}</b>
          </h3>
        </Card.Title>
        <Card.Text>
          <b>Height:</b> {character.height}
        </Card.Text>
        <Card.Text>
          <b>Gender:</b> {character.gender}
        </Card.Text>
        <Card.Text className="d-inline-flex">
          <b>Specie:</b> {getSpecie(character)}
        </Card.Text>
      </Card.Body>
      <div className="d-flex justify-content-end m-3">
        <Button onClick={() => handleFavourites(index)}>
          Add to favourites
        </Button>
      </div>
    </Card>
  ));

  return (
    <Container className="mt-5">
      <Container>
        {!characters.length ? (
          <div className="d-inline-flex w-100 justify-content-center">
            <Loading />
          </div>
        ) : (
          <CardColumns>{charactersList}</CardColumns>
        )}
      </Container>
    </Container>
  );
};

export default Characters;
