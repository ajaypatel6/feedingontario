import React from "react";
import { Link } from "react-router-dom";
import banks from "../data/foodbanks";
import meals from "../data/mealprograms";
import SingleBank from "../pages/SingleBank";

const Programs = () => {
  return (
    <>
      <div className="foodProgramsContainer">
        {banks.map((project) => {
          const { id, name, picture, text, contact, description, location } =
            project;
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
                  to={`/SingleBank/${name}`}
                  className="btn btn-info seemore m-2"
                >
                  See more
                </Link>
              </div>
            </article>
          );
        })}
        {meals.map((project) => {
          const { id, name, picture, text, contact, description, location } =
            project;
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

export default Programs;
