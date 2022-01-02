import React from "react";

const Searchbar = () => {
  const searchCity = () => {};

  return (
    <div className="searchBar ">
      <div className="searchBarText">Access Food In your Community</div>
      <div>feeind ontario, workin together towards hunger games</div>
      <button>Find your city</button>
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
      </div>
    </div>
  );
};

export default Searchbar;
