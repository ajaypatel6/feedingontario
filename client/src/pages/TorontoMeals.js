import React from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import { Link } from "react-router-dom";
import ShortFooter from "../components/ShortFooter";
import MealPrograms from "../components/MealPrograms";

const TorontoMeals = () => {
  return (
    <div>
      <Header></Header>
      <CityBar>Meals</CityBar>
      <div>
        <div className="torontoContainer">
          <div className="programButtons">
            <Link
              to={`/Toronto`}
              className="btn btn btn-primary btn-lg btn-block"
            >
              back
            </Link>
          </div>
          <h2>Meal programs</h2>
          {/* show programs */}
        </div>
      </div>
      <MealPrograms></MealPrograms>

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default TorontoMeals;
