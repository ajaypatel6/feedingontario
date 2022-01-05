import React, { useState, useEffect } from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

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
import Error from "./pages/Error";
import Toronto from "./pages/Toronto";
import TorontoBanks from "./pages/TorontoBanks";
import TorontoMeals from "./pages/TorontoMeals";
import SingleBank from "./pages/SingleBank";
import SingleMeal from "./pages/SingleMeal";

//
import items from "./data/data";
import BankPrograms from "./data/foodbanks";
import MealPrograms from "./data/mealprograms";

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
              <TorontoBanks />
            </Route>
            <Route path="/TorontoMeals">
              <TorontoMeals />
            </Route>
            <Route path="/SingleBank/:name">
              <SingleBank items={BankPrograms} />
            </Route>
            <Route path="/SingleMeal/:name">
              <SingleMeal items={MealPrograms} />
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
