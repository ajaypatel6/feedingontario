import React from "react";
import { Link } from "react-router-dom";
import banks from "../data/foodbanks";
import meals from "../data/mealprograms";
import SingleBank from "../pages/SingleBank";

const Programs = () => {
  return (
    <div>
      <div className="foodProgramsContainer">
        {banks.map((project) => {
          const { id, name, picture, text, contact, description, location } =
            project;
          return (
            <article key={id} className="menu-item">
              <img src={picture} alt={name} className="single-img" />

              <div className="item-info">
                <header>
                  <h4 className="project-title">{name}</h4>
                  {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                </header>
                <p className="item-text">{location}</p>

                {/* <p className="item-text">{description}</p> */}
                {/* 
                <p className="item-text">{text}</p>
                <p className="item-text">{contact}</p> */}

                <Link
                  to={`/SingleBank/${name}`}
                  className="btn btn-primary btn-sm"
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
              <img src={picture} alt={name} className="single-img" />

              <div className="item-info">
                <header>
                  <h4 className="project-title">{name}</h4>
                  {/* <img src={mainLogo} alt={github} className="smaller" /> */}
                </header>
                <p className="item-text">{location}</p>

                {/* <p className="item-text">{description}</p>

                <p className="item-text">{text}</p>
                <p className="item-text">{contact}</p> */}

                <Link
                  to={`/SingleMeal/${name}`}
                  className="btn btn-primary btn-sm"
                >
                  See more
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
