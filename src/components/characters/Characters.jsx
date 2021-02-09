import React, { useState, useEffect } from "react";

//COMPONENTS
import Loading from "../loading/Loading";
import Filter from "../filter/Filter";
import SingleCharacter from "./SingleCharacter";

//STYLING
import { Container, CardColumns } from "react-bootstrap";
import fav from "../../assets/svg/falcon_yellow.svg";
import noFav from "../../assets/svg/falcon_yellow_nofav.svg";

const Characters = ({
  characters,
  species,
  planets,
  starships,
  setCharacters,
  favourites,
  setFavourites,
  handleFavourites,
}) => {
  const [charactersFiltered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    setFiltered(characters);
  }, []);

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

  const getPlanet = (character) => {
    const planetData = character.homeworld;
    if (planetData.length > 0) {
      var res = planetData.split("/");
      var planetID = res[5];
      // setCharacters({ ...character, planet: planetID });
    }

    return (
      <>
        {planets[planetID] === undefined ? (
          <p>&nbsp;No information</p>
        ) : (
          <p>&nbsp;{planets[planetID - 1]}</p>
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
                    character={character}
                    index={index}
                    id={character.name}
                    getSpecie={getSpecie}
                    getStarship={getStarship}
                    getPlanet={getPlanet}
                    handleFavourites={handleFavourites}
                  />
                ))
              : characters.map((character, index) => (
                  <SingleCharacter
                    character={character}
                    index={index}
                    id={character.name}
                    getSpecie={getSpecie}
                    getStarship={getStarship}
                    getPlanet={getPlanet}
                    handleFavourites={handleFavourites}
                  />
                ))}
          </CardColumns>
        )}
      </Container>
    </Container>
  );
};

export default Characters;
