import React, { useState, useEffect } from "react";

//COMPONENTS
import Loading from "../loading/Loading";

//STYLING
import { Container, CardColumns, Card, Button } from "react-bootstrap";

const Starships = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [spaceships, setSpaceships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNext = () => setCurrentPage(currentPage + 1);

  const goToPrev = () => setCurrentPage(currentPage - 1);

  //this is the inital fetch, the dependency is an empty array, which means it will only fetch when the page is loaded
  useEffect(() => {
    fetch("https://swapi.dev/api/starships/?page=1")
      .then((res) => res.json())
      .then(
        (data) => {
          setSpaceships(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error!", error);
        }
      );
  }, []);

  //Fetch Function will fetch the server everytime the user changes the page
  async function fetchFunction() {
    await fetch("https://swapi.dev/api/starships/?page=" + currentPage)
      .then((res) => res.json())
      .then(
        (data) => {
          setSpaceships(data.results);
          // setNextPage(data.next);
          // setPrevPage(data.previous);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("error!");
        }
      );
  }

  //Every time the user changes the page, the API is fetched to the corresponding fetch
  useEffect(() => {
    fetchFunction();
  }, [currentPage]);

  console.log(spaceships);

  const shipList = spaceships.map((ship, index) => (
    <Card key={index} bg="dark" text="white">
      <Card.Body>
        <Card.Title>
          <h3>{ship.name}</h3>
        </Card.Title>
        <Card.Text>
          <b>Model:</b> {ship.model}
        </Card.Text>
        <Card.Text>
          <b>Manufacturer:</b> {ship.manufacturer}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Container className="MainPage mt-3">
      <div>
        {spaceships === [] ? <Loading /> : null}
        {currentPage === 1 ? (
          <Button className="m-1 secondary" onClick={() => goToPrev()} disabled>
            {" "}
            Previous Page{" "}
          </Button>
        ) : (
          <Button className="m-1 secondary" onClick={() => goToPrev()}>
            {" "}
            Previous Page{" "}
          </Button>
        )}
        <Button className="m-1" variant="dark">
          {" "}
          {currentPage}{" "}
        </Button>
        {currentPage === 4 ? (
          <Button className="m-1 secondary" onClick={() => goToNext()} disabled>
            {" "}
            Next Page{" "}
          </Button>
        ) : (
          <Button className="m-1 secondary" onClick={() => goToNext()}>
            {" "}
            Next Page{" "}
          </Button>
        )}
      </div>
      <hr />
      <Container>
        <CardColumns>{shipList}</CardColumns>
      </Container>
    </Container>
  );
};

export default Starships;
