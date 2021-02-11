import React, { useState, useEffect } from "react";

//COMPONENTS
import Loading from "../loading/Loading";
import Filter from "../filter/Filter";
import SingleCharacter from "./SingleCharacter";

//STYLING
import { Container, CardColumns, Modal, Button } from "react-bootstrap";

const Characters = ({
  characters,
  species,
  planets,
  starships,
  setCharacters,
  handleFavourites,
  setIsFiltered,
  charactersFiltered,
  setFiltered,
  show,
  handleClose,
}) => {
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    setFiltered(characters);
  }, []);

  //This function writes down on each card which specie the character belongs to
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
          <p>&nbsp;{species[specieID - 1]}</p>
        )}
      </>
    );
  };

  const getStarship = (character) => {
    const starshipData = character.starships;
    var starshipArray = [];
    if (starshipData.length > 0) {
      for (let i = 0; i < starshipData.length; i++) {
        var url = starshipData[i];
        fetch(url)
          .then((res) => res.json())
          .then(
            (data) => {
              var starshipID = data.name;
              starshipArray.push(starshipID);
            },
            (error) => {
              console.log("error!", error);
            }
          );
      }
    }
    return (
      <>
        {starshipArray[0] === undefined ? (
          <p>&nbsp;None</p>
        ) : (
          <ul>
            {starshipArray.map((starship) => {
              return (
                <li key={starship}>
                  <p>{starships[starship - 1]}</p>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };

  return (
    <Container className="mt-5">
      <Container>
        <Filter
          characters={characters}
          species={species}
          planets={planets}
          starships={starships}
          charactersFiltered={charactersFiltered}
          setFiltered={setFiltered}
          setCharacters={setCharacters}
          filter={filter}
          select={select}
          setFilter={setFilter}
          setSelect={setSelect}
          setIsFiltered={setIsFiltered}
        />
        {!characters.length ? (
          <div className="d-inline-flex w-100 justify-content-center">
            <Loading />
          </div>
        ) : (
          <CardColumns>
            {filter !== ""
              ? charactersFiltered.map((character, index) => (
                  <SingleCharacter
                    key={character.name}
                    character={character}
                    index={index}
                    id={character.name}
                    getSpecie={getSpecie}
                    getStarship={getStarship}
                    handleFavourites={handleFavourites}
                  />
                ))
              : characters.map((character, index) => (
                  <SingleCharacter
                    key={character.name}
                    character={character}
                    index={index}
                    id={character.name}
                    getSpecie={getSpecie}
                    getStarship={getStarship}
                    handleFavourites={handleFavourites}
                  />
                ))}
          </CardColumns>
        )}
      </Container>
      <Modal show={show.bool} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Galactic League</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {show.character} has been added to My Galactic League
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Characters;
