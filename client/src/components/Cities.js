import React from "react";
import cities from "../data/data";
import { Link } from "react-router-dom";

const Cities = () => {
  const searchCity = () => {
    alert("bottom serach");
  };

  return (
    <div className="cityStuff">
      <div className="helperText">Dont know where to start?</div>
      <div className="helperText"> Select city </div>
      {/*  <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Find your City
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a class="dropdown-item" href="#">
            <Link to={`/Toronto`} className="btn good-btn">
              Toronto
            </Link>
          </a>
          <li>
            <a class="dropdown-item" href="#">
              Hamilton
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Niagara
            </a>
          </li>
        </ul>
      </div> */}
      {/* <div>Or</div> */}
      <div class="">
        {/* <div class="search">
          <input
            id="citySearch"
            type="text"
            class="searchTerm"
            placeholder="search for city"
          ></input>
          <button
            type="submit"
            class="searchButton"
            onClick={() =>
              searchCity(document.getElementById("citySearch").value)
            }
          >
            Search
          </button>
        </div> */}
        <div className="cityButtonContainer">
          {cities.map((link) => {
            const { id, name } = link;
            return (
              <Link to={`/${name}`} className="btn-city">
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cities;
