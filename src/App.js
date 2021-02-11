import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//COMPONENTS
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
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );
  const [isFiltered, setIsFiltered] = useState(false);
  const [charactersFiltered, setFiltered] = useState([]);

  //planetFlag is set to true to trigger the function that fills the array with the name of the planet
  const [planetFlag, setPlanetFlag] = useState(false);
  const [speciesFlag, setSpeciesFlag] = useState(false);
  const [starshipsFlag, setStarshipsFlag] = useState(false);
  const [show, setShow] = useState({
    bool: false,
    character: "",
  });

  var arraySpecies = [];
  var arrayPlanets = [];
  var arrayStarships = [];
  var arrayCharacters = [];
  var arrayAddPlanets = [];
  var arrayAddSpecies = [];
  var arrayAddStarships = [];

  //First function that fetches the list of the characters and adds to a State
  const fetchCharacters = async () => {
    const totalPages = 10;
    for (let i = 1; i < totalPages; i++) {
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
            var temp = "";
            arrayCharacters.push(temp);
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setCharacters(arrayCharacters);
    setPlanetFlag(true);
  };

  //This function fetches the planet name where the character belongs
  //and adds it to the state
  const addPlanets = async () => {
    for (let i = 0; i < characters.length; i++) {
      const planetData = characters[i].homeworld;
      var s = "s";
      var position = 4;
      var planetDataSecure = [
        planetData.slice(0, position),
        s,
        planetData.slice(position),
      ].join("");
      await fetch(planetDataSecure)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.name;
            var obj = { ...characters[i], homeworld: temp };
            arrayAddPlanets.push(obj);
          },
          (error) => {
            console.log("error!", error);
          }
        );
    }
    setCharacters(arrayAddPlanets);
  };

  const addSpecies = async () => {
    alert("Characters' species will now be loaded, please wait...");
    for (let i = 0; i < characters.length; i++) {
      const speciesData = characters[i].species[0];
      if (speciesData === undefined) {
        var temp = "No Information";
        var obj = { ...characters[i], species: temp };
        arrayAddSpecies.push(obj);
      } else {
        var s = "s";
        var position = 4;
        var speciesDataSecure = [
          speciesData.slice(0, position),
          s,
          speciesData.slice(position),
        ].join("");
        await fetch(speciesDataSecure)
          .then((res) => res.json())
          .then(
            (data) => {
              var temp = data.name;
              var obj = { ...characters[i], species: temp };
              arrayAddSpecies.push(obj);
            },
            (error) => {
              console.log("error!", error);
            }
          );
      }
    }
    setSpeciesFlag(true);
    setCharacters(arrayAddSpecies);
  };

  const addStarships = async () => {
    alert("Characters' starships will now be loaded,, please wait...");
    for (let i = 0; i < characters.length; i++) {
      const starshipsData = characters[i].starships[0];
      if (starshipsData === undefined) {
        var temp = "No Information";
        var obj = { ...characters[i], starships: temp };
        arrayAddStarships.push(obj);
      } else {
        var s = "s";
        var position = 4;
        var speciesDataSecure = [
          starshipsData.slice(0, position),
          s,
          starshipsData.slice(position),
        ].join("");
        await fetch(speciesDataSecure)
          .then((res) => res.json())
          .then(
            (data) => {
              var temp = data.name;
              var obj = { ...characters[i], starships: temp };
              arrayAddStarships.push(obj);
            },
            (error) => {
              console.log("error!", error);
            }
          );
      }
    }
    setStarshipsFlag(true);
    setCharacters(arrayAddStarships);
  };

  //Species fetching for the corresponding Section
  const fetchSpecies = async () => {
    const totalPages = 5;
    for (let i = 1; i < totalPages; i++) {
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
            var temp = "";
            arraySpecies.push(temp);
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setSpecies(arraySpecies);
  };

  //Planets fetching for the corresponding Section
  const fetchPlanets = async () => {
    const totalPages = 7;
    for (let i = 1; i < totalPages; i++) {
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
            var temp = "";
            arrayPlanets.push(temp);
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setPlanets(arrayPlanets);
  };

  //Starships fetching for the corresponding Section
  const fetchStarships = async () => {
    const totalPages = 5;
    for (let i = 1; i < totalPages; i++) {
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
            var temp = "";
            arrayStarships.push(temp);
            setIsLoaded(true);
            setError(error);
            console.log("error!", error);
          }
        );
    }
    setStarships(arrayStarships);
  };

  //Function to filter the favourites
  const handleFavourites = (i) => {
    if (!isFiltered) {
      if (!favourites.length) {
        setFavourites([characters[i]]);
        setShow({ bool: true, character: characters[i].name });
      }
      if (favourites.length > 9) {
        alert("Your List of Favourites has reached the limit of 10 characters");
        return;
      }
      if (characters[i] && !favourites.includes(characters[i])) {
        setFavourites([...favourites, characters[i]]);
        setShow({ bool: true, character: characters[i].name });
      } else if (favourites.includes(characters[i])) {
        alert(`${characters[i].name} is already included in your Favourites`);
      }
    }
    if (isFiltered) {
      if (!favourites.length) {
        setFavourites([charactersFiltered[i]]);
        setShow({ bool: true, character: charactersFiltered[i].name });
      }
      if (favourites.length > 9) {
        alert("Your List of Favourites has reached the limit of 10 characters");
        return;
      }
      if (characters[i] && !favourites.includes(charactersFiltered[i])) {
        setFavourites([...favourites, charactersFiltered[i]]);
        setShow({ bool: true, character: charactersFiltered[i].name });
      } else if (favourites.includes(charactersFiltered[i])) {
        alert(
          `${charactersFiltered[i].name} is already included in your Favourites`
        );
      }
    }
  };

  //Function to remove characters from the Galactic League
  const handleRemove = (e) => {
    var arr = [...favourites];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name === e.target.value) {
        arr.splice(i, 1);
        setFavourites(arr);
        window.localStorage.setItem("favList", JSON.stringify(arr));
      }
    }
  };

  //Function to close the Modal on the Characters list
  const handleClose = () => {
    setShow(false);
  };

  //Storaging the List of Favourites on the Local Storage
  useEffect(() => {
    window.localStorage.setItem("favList", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    fetchSpecies();
    fetchPlanets();
    fetchStarships();
    fetchCharacters();
    // addSpecies();
  }, []);

  useEffect(() => {
    addPlanets();
  }, [planetFlag]);

  return (
    <div className="App">
      <Router>
        <div>
          <NavBar favourites={favourites} />
          <Switch>
            <Route path="/Nemuru" exact component={Homepage} />
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
                  favourites={favourites}
                  charactersFiltered={charactersFiltered}
                  setIsFiltered={setIsFiltered}
                  setCharacters={setCharacters}
                  setFavourites={setFavourites}
                  handleFavourites={handleFavourites}
                  setFiltered={setFiltered}
                  show={show}
                  handleClose={handleClose}
                  planetFlag={planetFlag}
                  speciesFlag={speciesFlag}
                  setStarshipsFlag={setStarshipsFlag}
                  starshipsFlag={starshipsFlag}
                  addStarships={addStarships}
                  addSpecies={addSpecies}
                />
              )}
            />
            <Route path="/starships" exact component={Starships} />
            <Route
              path="/mygalacticleague"
              render={() => (
                <MyGalacticLeague
                  characters={characters}
                  favourites={favourites}
                  setFavourites={setFavourites}
                  handleFavourites={handleFavourites}
                  handleRemove={handleRemove}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
