// import logo from './logo.svg';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Contact from "./components/Contact/contact";
import "./components/Contact/contact";
// import Navbar from "./components/Navbar/navbar";
// import Footer from "./components/Footer/footer";
import AboutMe from "./components/AboutMe/aboutme";
import Portfolio from "./components/Portfolio/portfolio";


function App() {
  return (
    <Router>
      {/* <Navbar />
      <Contact /> */}
      <Route path="/" exact component={AboutMe} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Portfolio" component={Portfolio} />


    </Router>
  );
}

export default App;
