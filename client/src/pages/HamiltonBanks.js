import React from "react";
import Header from "../components/Header";
import BankBar from "../components/Bars/BankBar";
import BankPrograms from "../components/BankPrograms";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";

const HamiltonBanks = () => {
  const searchPrograms = () => {
    alert("initiating search");
  };

  return (
    <div>
      <Header></Header>
      <BankBar>Meals</BankBar>
      <div>
        <div className="torontoContainer">
          <div className="programButtons">
            <Link
              to={`/Hamilton`}
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

export default HamiltonBanks;
