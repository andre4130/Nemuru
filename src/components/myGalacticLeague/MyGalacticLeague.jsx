import React from "react";
import { Link } from "react-router-dom";

//STYLING
import { Card, Button } from "react-bootstrap";

const MyGalacticLeague = ({ favourites, handleRemove }) => {
  const renderFavlist = () => {
    switch (true) {
      case !favourites.length:
        return (
          <div className="container empty-list">
            <h3>Your Galactic League is currently empty</h3>
            <div>
              <p>
                Go to <Link to="/characters">&nbsp;Characters&nbsp;</Link> page
                and add characters to your Team
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="container d-flex-column w-75">
            {favourites.map((fav, index) => {
              return (
                <div className="container py-2" key={index}>
                  <Card index={fav.name} bg="dark">
                    <Card.Header as="h5" style={{ color: "whitesmoke" }}>
                      Number {index + 1} of your Galactic League
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <b>{fav.name}</b>
                      </Card.Title>
                      <Card.Text>
                        <p>Height: {fav.height}</p>
                      </Card.Text>
                      <Card.Text>
                        <p>Mass: {fav.mass}</p>
                      </Card.Text>
                      <Card.Text>
                        <p>Birth: {fav.birth_year}</p>
                      </Card.Text>
                      <Card.Text>
                        <p>Planet: {fav.homeworld}</p>
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
