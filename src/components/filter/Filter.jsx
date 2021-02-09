import React, { useState, useEffect } from "react";

//STYLING
import { Form } from "react-bootstrap";

const Filter = ({ planets, species, characters, starships }) => {
  const [filter, setFilter] = useState("");

  //   useEffect(() => {
  //     console.log("in filter", planets);
  //   }, [planets]);

  const handleSelect = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const renderOutput = () => {
    switch (true) {
      case filter === "":
        return null;
      case filter === "planet":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Planet</Form.Label>
            <Form.Control as="select">
              {planets.map((planet) => {
                return (
                  <option key={planet} value={planet}>
                    {planet}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        );
      case filter === "specie":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Specie</Form.Label>
            <Form.Control as="select">
              {species.map((specie) => {
                return (
                  <option key={specie} value={specie}>
                    {specie}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        );
      case filter === "character":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Character</Form.Label>
            <Form.Control as="select">
              {characters.map((character) => {
                return (
                  <option key={character.name} value={character.name}>
                    {character.name}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        );
      case filter === "starship":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Starship</Form.Label>
            <Form.Control as="select">
              {starships.map((starship) => {
                return (
                  <option key={starship} value={starship}>
                    {starship}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
        );
      default:
        break;
    }
  };

  return (
    <div className="container d-flex p-0 m-0">
      <div className="col-5 pl-0 pr-2">
        <Form.Group controlId="filter">
          <Form.Label>Filter by</Form.Label>
          <Form.Control as="select" onChange={(e) => handleSelect(e)}>
            <option value="">Please select...</option>
            <option value="planet">Planets</option>
            <option value="specie">Species</option>
            <option value="character">Characters</option>
            <option value="starship">Starships</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div className="col-7 pl-2 pr-0">{renderOutput()}</div>
    </div>
  );
};

export default Filter;
