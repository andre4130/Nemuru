import React, { useState, useEffect } from "react";

//STYLING
import { Card, Button } from "react-bootstrap";

const MyGalacticLeague = ({
  characters,
  favourites,
  setFavourites,
  handleRemove,
}) => {
  const renderFavlist = () => {
    switch (true) {
      case !favourites.length:
        return <p>Empty List</p>;
      default:
        return (
          <div className="container d-flex-column w-75">
            {favourites.map((fav, index) => {
              return (
                <div className="container py-2">
                  <Card index={fav.name} bg="dark">
                    <Card.Header as="h5">
                      <b>{fav.name}</b>
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to
                        additional content.
                      </Card.Text>
                      <div className="d-flex justify-content-end">
                        <Button
                          variant="primary"
                          value={fav.name}
                          onClick={(e) => handleRemove(e)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        );
    }
  };

  return (
    <div className="container d-flex-column justify-content-center text-justify-center">
      <div className="d-flex justify-content-center mt-3">
        <h2>
          <b>Welcome to My Galactic League</b>
        </h2>
      </div>
      {renderFavlist()}
    </div>
  );
};

export default MyGalacticLeague;
