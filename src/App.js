import logo from './logo.svg';
import './App.css';
import FAQ from "./FAQ";
import About from "./About";
import Home from "./Home";
import Contacts from "./contacts";
import Advantages from "./Pages/advantages";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
    return (
        <Router>
        <div className="App">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/contacts">contacts</Link>
                </li>
                <li>
                    <Link to="/advantages">advantages</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/faq">
                    <FAQ />
                </Route>
                <Route path="/contacts">
                    <Contacts />
                </Route>               
                 <Route path="/advantages">
                    <Advantages />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;
