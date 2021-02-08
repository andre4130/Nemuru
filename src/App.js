import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//STYLING
import { Navbar, Nav, Button } from "react-bootstrap";

//MEDIA
import rebel from "./assets/svg/rebel.svg";

//COMPONENTS
import Loading from "./components/loading/Loading";
import NavBar from "./components/navbar/NavBar";
import Homepage from "./components/homepage/Homepage";
import Planets from "./components/planets/Planets";
import Species from "./components/species/Species";
import Starships from "./components/starships/Starships";
import Characters from "./components/characters/Characters";
import MyGalacticLeague from "./components/myGalacticLeague/MyGalacticLeague";

function App() {
  //Fetching of the API information
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [species, setSpecies] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [characters, setCharacters] = useState([]);

  var arraySpecies = [];
  var arrayPlanets = [];
  var arrayStarships = [];
  var arrayCharacters = [];

  const fetchSpecies = async () => {
    for (let i = 1; i < 5; i++) {
      await fetch(`https://swapi.dev/api/species/?page=${i}`)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.results;
            for (let i = 0; i < temp.length; i++) {
              arraySpecies.push(temp[i].name);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setSpecies(arraySpecies);
  };

  const fetchPlanets = async () => {
    for (let i = 1; i < 7; i++) {
      await fetch(`https://swapi.dev/api/planets/?page=${i}`)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.results;
            for (let i = 0; i < temp.length; i++) {
              arrayPlanets.push(temp[i].name);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setPlanets(arrayPlanets);
  };

  const fetchStarships = async () => {
    for (let i = 1; i < 5; i++) {
      await fetch(`https://swapi.dev/api/starships/?page=${i}`)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.results;
            for (let i = 0; i < temp.length; i++) {
              arrayStarships.push(temp[i].name);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setStarships(arrayStarships);
  };

  const fetchCharacters = async () => {
    for (let i = 1; i < 10; i++) {
      await fetch(`https://swapi.dev/api/people/?page=${i}`)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.results;
            for (let i = 0; i < temp.length; i++) {
              arrayCharacters.push(temp[i]);
            }
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setCharacters(arrayCharacters);
  };

  useEffect(() => {
    fetchSpecies();
    fetchPlanets();
    fetchStarships();
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/planets" exact component={Planets} />
            <Route path="/species" exact component={Species} />
            <Route
              path="/characters"
              render={() => (
                <Characters
                  characters={characters}
                  species={species}
                  planets={planets}
                  starships={starships}
                />
              )}
            />
            <Route path="/starships" exact component={Starships} />
            <Route
              path="/mygalacticleague"
              exact
              component={MyGalacticLeague}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
