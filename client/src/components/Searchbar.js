import React from "react";
import { Link } from "react-router-dom";

const Searchbar = ({ items }) => {
  const searchCity = () => {
    alert("initiating search");
  };
  // const {} = items;

  return (
    <div className="searchBar">
      <div className="searchBarText">Access Food In your Community</div>
      <div className="searchBarText2">
        Feeding Ontario, Working together towards a hunger-free community
      </div>
      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Find your City
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            {/* <Link to={`/project/${name}`} className="btn good-btn">
              See more
            </Link> */}
            <a class="dropdown-item" href="">
              <Link to={`/Hamilton`} className="btn good-btn">
                Hamilton
              </Link>
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="">
              Toronto
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="">
              Niagara
            </a>
          </li>
        </ul>
      </div>{" "}
      {/* <div className="find">Or</div> */}
      <div class="">
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
              searchCity(document.getElementById("citySearch").value)
            }
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
