import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import MealPrograms from "../components/MealPrograms";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SingleMeal = () => {
  const location = useLocation();

  let meal = location.pathname.substring(12);

  useEffect(() => {
    console.log(meal);
  }, [meal]);

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
          <h2>Meal Program</h2>
        </div>
      </div>
      {/* <MealPrograms></MealPrograms> */}

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default SingleMeal;
