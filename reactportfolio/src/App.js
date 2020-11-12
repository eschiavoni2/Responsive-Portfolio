 import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch,} from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/contact";
import "./components/Contact/contact";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Projects/projects";



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
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;