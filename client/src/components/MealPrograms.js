import React from "react";
import meals from "../data/mealprograms";

//
import { Link } from "react-router-dom";

const MealPrograms = () => {
  return (
    <>
      <div className="foodProgramsContainer">
        {meals.map((project) => {
          const { id, name, picture, location, contact, description } = project;
          return (
            <article key={id} className="menu-item">
              <div className="item-info">
                <header>
                  <h4 className="project-title">{name}</h4>
                  <img src={picture} alt={name} className="single-img" />
                </header>
                <p className="project-location">{location}</p>

                <p className="project-desc">{description}</p>

                <Link
                  to={`/SingleMeal/${name}`}
                  className="btn btn-success seemore m-2"
                >
                  See more
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default MealPrograms;
