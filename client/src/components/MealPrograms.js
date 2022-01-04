import React from "react";
import meals from "../data/mealprograms";

//
import { Link } from "react-router-dom";

const MealPrograms = () => {
  return (
    <>
      <div className="foodProgramsContainer">
        {meals.map((project) => {
          const { id, name, image, text, contact, description } = project;
          return (
            <article key={id} className="menu-item">
              <img src={image} alt={name} className="photo" />

              <div className="item-info">
                <header>
                  <h4 className="project-title">{name}</h4>
                  {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                </header>
                <p className="item-text">{description}</p>

                <p className="item-text">{text}</p>
                <p className="item-text">{contact}</p>

                <Link to={`/banks/${name}`} className="btn btn-primary btn-sm">
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
