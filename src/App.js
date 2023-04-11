import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CalculatorComponent from './Components/Routes/CalculatorComponent/CalculatorComponent';
import AboutMeComponent from './Components/Routes/AboutMeComponent/AboutMeComponent';
import RickAndMortyComponent from './Components/Routes/RickAndMortyComponent/RickAndMortyComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="nav">
          <li>
            <Link to="/">Portfolio</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/rickandmorty">Rick And Morty</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<AboutMeComponent />}></Route>
          <Route
            exact
            path="/calculator"
            element={<CalculatorComponent />}
          ></Route>
          <Route exact path="/rickandmorty" element={<RickAndMortyComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
