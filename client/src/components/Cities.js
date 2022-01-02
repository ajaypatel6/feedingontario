import React from "react";

const Cities = () => {

  const searchCity = () =>{

  }

  return (
    <div className="cityStuff">
      <div className="helperText">Dont know where to start?</div>
      <div> Select city </div>
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
        <div></div>
      </div>
    </div>
  );
};

export default Cities;
