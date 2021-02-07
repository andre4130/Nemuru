import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/planets" exact component={Planets} />
            <Route path="/species" exact component={Species} />
            <Route path="/characters" exact component={Characters} />
            <Route path="/starships" exact component={Starships} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
