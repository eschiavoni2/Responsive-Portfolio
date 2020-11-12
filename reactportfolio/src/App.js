// import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/contact";
import "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";
function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route exact path="/">
        <AboutMe />
        </Route>
        <Route exact path="/Contact">
        <Contact />
        </Route>
        <Route path="/Portfolio">
        <Portfolio />
        </Route>
        <Route path="/Resume">
        <Portfolio />
        </Route>
        {/* work on adding resume */}
        {/* <Route */}
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;