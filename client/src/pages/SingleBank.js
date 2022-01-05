import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import BankPrograms from "../components/BankPrograms";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SingleBank = ({ items }) => {
  const location = useLocation();

  let bank = location.pathname.substring(12);

  useEffect(() => {
    console.log(bank);
  }, [bank]);

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
          <h2>Food bank</h2>
        </div>
      </div>
      {/* <BankPrograms></BankPrograms> */}

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default SingleBank;
