// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/contact";
import "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <nav>
          <ul>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            {/* <li>
              <Link to="/Resume">Resume</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={AboutMe} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Portfolio" component={Portfolio} />
        {/* work on adding resume */}
        {/* <Route */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
