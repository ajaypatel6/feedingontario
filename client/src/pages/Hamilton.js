import React from "react";
import Header from "../components/Header";
import CityBar from "../components/Bars/CityBar";
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
              className="btn btn btn-info btn-lg btn-block btn-back"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <Programs></Programs>
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default Hamilton;
