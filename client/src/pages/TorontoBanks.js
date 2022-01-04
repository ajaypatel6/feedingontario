import React from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import BankPrograms from "../components/BankPrograms";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";

const TorontoBanks = () => {
  const searchPrograms = () => {
    alert("initiating search");
  };

  return (
    <div>
      <Header></Header>
      <CityBar>Meals</CityBar>
      <div>
        <div className="torontoContainer">
          <div className="programButtons">
            <Link
              to={`/Toronto`}
              className="btn btn btn-primary btn-lg btn-block"
            >
              back
            </Link>
          </div>
          <h2>Food banks</h2>
        </div>
      </div>
      <BankPrograms></BankPrograms>

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default TorontoBanks;
