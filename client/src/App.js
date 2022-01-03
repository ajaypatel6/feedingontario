import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import FirstContent from "./components/FirstContent";
import MiddleContent from "./components/MiddleContent";
import Cities from "./components/Cities";
import Footer from "./components/Footer";

// pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import City from "./pages/SingleCity";
import Error from "./pages/Error";
import Toronto from "./pages/Toronto";
import TorontoBanks from "./pages/TorontoBanks";
import TorontoMeals from "./pages/TorontoMeals";

//
import items from "./data/data";

function App() {
  const [cities, setCities] = useState(items);

  return (
    <>
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Searchbar items={cities}></Searchbar>
              <FirstContent></FirstContent>
              <MiddleContent></MiddleContent>
              <Cities></Cities>
              <Footer></Footer>
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Toronto">
              <Toronto />
            </Route>
            <Route path="/TorontoBanks">
              <Toronto />
            </Route>
            <Route path="/TorontoMeals">
              <Toronto />
            </Route>
            <Route path="/city/:name">
              <City items={cities} />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </>
    </>
  );
}

export default App;
