import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SingleMealBar from "../components/Bars/SingleMealBar";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import meals from "../data/mealprograms";

const SingleMeal = () => {
  const location = useLocation();
  let mealName = location.pathname.substring(12);

  const [singleMeal, setSingleMeal] = useState(meals);

  useEffect(() => {
    console.log(mealName);

    // console.log(meals);
    let mealData = meals.filter((meal) => meal.name === mealName);
    // console.log(mealData);

    setSingleMeal(mealData);
    console.log(singleMeal);
    // console.log(singleMeal[0].location);
  }, [mealName]);

  return (
    <div>
      <Header></Header>
      <SingleMealBar>Meals</SingleMealBar>
      <div>
        <div className="torontoContainer">
          <div className="programButtons">
            <Link
              to={`/Hamilton`}
              className="btn btn btn-primary btn-lg btn-block"
            >
              back
            </Link>
          </div>
          <h2>Meal Program</h2>
          <div className="mealContainer">
            <h2 className="place">{mealName} </h2>
            <img src={singleMeal[0].picture} className="single-img" />

            <h2 className="description">{singleMeal[0].description} </h2>
            <h2 className="location">{singleMeal[0].location} </h2>
            <h2 className="contact">{singleMeal[0].contact} </h2>
            <h2 className="map">{singleMeal[0].map} </h2>
          </div>
        </div>
      </div>

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default SingleMeal;
