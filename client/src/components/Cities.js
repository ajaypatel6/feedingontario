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
  
      <div class="">
        <div className="cityButtonContainer">
          {cities.map((link) => {
            const { id, name } = link;
            return (
              <Link to={`/${name}`} className="btn-city btn btn-primary">
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
