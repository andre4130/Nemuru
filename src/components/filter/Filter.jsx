import React, { useEffect } from "react";

//STYLING
import { Form } from "react-bootstrap";

const Filter = ({
  planets,
  species,
  characters,
  starships,
  setFiltered,
  filter,
  select,
  setFilter,
  setSelect,
  setIsFiltered,
}) => {
  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  const filterList = () => {
    switch (true) {
      case filter === "name":
        let name = characters.filter((item) => {
          if (item !== undefined && item.name === select) {
            return true;
          }
        });
        setFiltered(name);
        break;
      case filter === "homeworld":
        let homeworld = characters.filter((item) => {
          if (item !== undefined && item.homeworld === select) {
            return true;
          }
        });
        setFiltered(homeworld);
        break;
      case filter === "species":
        let species = characters.filter((item) => {
          if (item !== undefined && item.species === select) {
            return true;
          }
        });
        setFiltered(species);
        break;
      case filter === "starships":
        let starships = characters.filter((item) => {
          if (item !== undefined && item.starships === select) {
            return true;
          }
        });
        setFiltered(starships);
        break;
      default:
        break;
    }
  };

  const filterFlag = () => {
    if (filter === "") {
      setIsFiltered(false);
    }
    if (filter !== "") {
      setIsFiltered(true);
    }
  };

  useEffect(() => {
    filterList();
    filterFlag();
  }, [filter, select]);

  const renderOutput = () => {
    switch (true) {
      case filter === "":
        return null;
      case filter === "homeworld":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Planet</Form.Label>
            <Form.Control as="select" onChange={(e) => handleSelect(e)}>
              <option value="">Please select...</option>
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
      case filter === "species":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Specie</Form.Label>
            <Form.Control as="select" onChange={(e) => handleSelect(e)}>
              <option value="">Please select...</option>
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
      case filter === "name":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Character</Form.Label>
            <Form.Control as="select" onChange={(e) => handleSelect(e)}>
              <option value="">Please select...</option>
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
      case filter === "starships":
        return (
          <Form.Group controlId="filter">
            <Form.Label>Please Select a Starship</Form.Label>
            <Form.Control as="select" onChange={(e) => handleSelect(e)}>
              <option value="">Please select...</option>
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
          <Form.Control as="select" onChange={(e) => handleFilter(e)}>
            <option value="">All Characters</option>
            <option value="homeworld">Planets</option>
            <option value="species">Species</option>
            <option value="name">Characters</option>
            <option value="starships">Starships</option>
          </Form.Control>
        </Form.Group>
      </div>
      <div className="col-7 pl-2 pr-0">{renderOutput()}</div>
    </div>
  );
};

export default Filter;
