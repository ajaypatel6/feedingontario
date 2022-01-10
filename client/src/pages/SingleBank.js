import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CityBar from "../components/CityBar";
import ShortFooter from "../components/ShortFooter";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import banks from "../data/foodbanks";

const SingleBank = () => {
  const location = useLocation();

  let bankName = location.pathname.substring(12);
  const [singleBank, setSingleBank] = useState(banks);

  useEffect(() => {
    console.log(bankName);

    let bankData = banks.filter((bank) => bank.name === bankName);

    setSingleBank(bankData);
    console.log(singleBank);

  }, [bankName]);

  return (
    <div>
      <Header></Header>
      <CityBar>Meals</CityBar>
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
          <h2>Food bank</h2>
          <div className="mealContainer">
            <h2>{bankName} </h2>
            <img src={singleBank[0].picture} className="single-img" />

            <h2>{singleBank[0].description} </h2>
            <h2>{singleBank[0].location} </h2>
            <h2>{singleBank[0].contact} </h2>
          </div>
        </div>
      </div>
      {/* <BankPrograms></BankPrograms> */}

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default SingleBank;
