import React, { useState, useEffect } from "react";

//COMPONENTS
import Loading from "../loading/Loading";

//STYLING
import { Container, CardColumns, Card, Button } from "react-bootstrap";

const Species = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [species, setSpecies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState("?");

  const goToNext = () => setCurrentPage(currentPage + 1);

  const goToPrev = () => setCurrentPage(currentPage - 1);

  //this is the inital fetch, the dependency is an empty array, which means it will only fetch when the page is loaded
  useEffect(() => {
    fetch("https://swapi.dev/api/species/?page=1")
      .then((res) => res.json())
      .then(
        (data) => {
          setSpecies(data.results);
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
    await fetch("https://swapi.dev/api/species/?page=" + currentPage)
      .then((res) => res.json())
      .then(
        (data) => {
          setSpecies(data.results);
          var calc = Math.ceil(data.count / 10);
          setPages(calc);
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

  const speciesList = species.map((specie, index) => (
    <Card key={index} bg="dark" text="white">
      <Card.Body>
        <Card.Title>
          <h3>
            <b>{specie.name}</b>
          </h3>
        </Card.Title>
        <Card.Text>
          <b>Classification:</b> {specie.classification}
        </Card.Text>
        <Card.Text>
          <b>Designation:</b> {specie.designation}
        </Card.Text>
        <Card.Text>
          <b>Language:</b> {specie.language}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <Container className="MainPage mt-3">
      <div className="d-inline-flex w-100 justify-content-center mt-3">
        {currentPage === 1 ? (
          <Button className="m-1" onClick={() => goToPrev()} disabled>
            Previous Page
          </Button>
        ) : (
          <Button className="m-1" onClick={() => goToPrev()}>
            Previous Page
          </Button>
        )}
        <div
          className="d-flex m-1 p-2 bg-dark align-items-center"
          style={{ height: "38px", borderRadius: "5px" }}
        >
          {currentPage}/{pages}
        </div>
        {currentPage === pages ? (
          <Button className="m-1" onClick={() => goToNext()} disabled>
            Next Page
          </Button>
        ) : (
          <Button className="m-1" onClick={() => goToNext()}>
            Next Page
          </Button>
        )}
      </div>
      <hr />
      <Container>
        {!species.length ? (
          <div className="d-inline-flex w-100 justify-content-center">
            <Loading />
          </div>
        ) : (
          <CardColumns>{speciesList}</CardColumns>
        )}
      </Container>
    </Container>
  );
};

export default Species;
