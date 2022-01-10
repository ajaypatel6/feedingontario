import React from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import Programs from "../components/Programs";

import ShortFooter from "../components/ShortFooter";

//
import { Link } from "react-router-dom";

//pages

const Hamilton = () => {
  const searchPrograms = () => {
    alert("initiating search");
  };

  // sorting the stuff into

  return (
    <div>
      <Header></Header>
      <CityBar></CityBar>
      <div>
        <div className="torontoContainer">
          <h2>Find food near you</h2>

          <div className="">
            <Link
              to={`/HamiltonBanks`}
              className="btn btn btn-primary btn-lg btn-block"
            >
              Food banks
            </Link>

            <Link
              to={`/HamiltonMeals`}
              className="btn btn btn-secondary btn-lg btn-block"
            >
              Meal programs{" "}
            </Link>
          </div>
          <div className="programButtons">
            <Link
              to={`/`}
              className="btn btn btn-info btn-lg btn-block"
            >
              back home
            </Link>
          </div>
          {/* <div>or</div>

          <div class="centerSearch">
            <div className="search">
              <input
                id="citySearch"
                type="text"
                class="searchTerm"
                placeholder="Search for city"
              ></input>
              <button
                type="submit"
                class="searchButton"
                onClick={() =>
                  searchPrograms(document.getElementById("citySearch").value)
                }
              >
                Search
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <Programs></Programs>
      {/* Put all the programs here (meals+banks) */}
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default Hamilton;
