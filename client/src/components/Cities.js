import React from "react";

const Cities = () => {
  const searchCity = () => {};

  return (
    <div className="cityStuff">
      <div className="helperText">Dont know where to start?</div>
      <div> Select city </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Find your City{" "}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="#">
              Toronto
            </a>
          </li>
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
      </div>{" "}
      <div>Or</div>
      <div class="">
        <div class="search">
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cities;
