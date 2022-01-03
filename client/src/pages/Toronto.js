import React from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import Programs from "../components/Programs";
import ShortFooter from "../components/ShortFooter";

// data
import banks from "../data/foodbanks";
import meals from "../data/mealprograms";

const Toronto = () => {
  const searchPrograms = () => {
    alert("initiating search");
  };

  return (
    <div>
      <Header></Header>
      <CityBar></CityBar>
      <div>
        <div className="firstTextContainer">
          <h1>Find food near you</h1>
          <button>Find food banks</button>
          <button>Find meal programs</button>
          <div>or</div>
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
                  searchPrograms(document.getElementById("citySearch").value)
                }
              >
                Search
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
      <Programs></Programs>
      {/* maybe diff footer for this variation */}
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default Toronto;
