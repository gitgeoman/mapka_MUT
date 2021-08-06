import "./App.css";
import Header from "./Header";
import PureMap from "./Map";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import budynki from "./spatialData/budynki.json";
import militaryUnits from "./spatialData/MilitaryUnits";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <div className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/MilitaryUnitsMap">Polish Military Units Map</Link>
              </li>
              <li>
                <Link to="/MUTMap">MutMap</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/MilitaryUnitsMap">
              <PureMap data={militaryUnits} zoom={6} />
            </Route>
            <Route path="/MUTMap">
              <PureMap data={budynki} zoom={15} />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
