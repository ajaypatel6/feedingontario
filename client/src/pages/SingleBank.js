import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SingleBankBar from "../components/Bars/SingleBankBar";
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
      <SingleBankBar>Meals</SingleBankBar>
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
            <h2 className="place">{bankName} </h2>
            <img src={singleBank[0].picture} className="single-img2" />

            <h2 className="description">{singleBank[0].description} </h2>
            <h2 className="location">{singleBank[0].location} </h2>
            <h2 className="contact">{singleBank[0].contact} </h2>
            <button className="btn btn-secondary">Bus </button>
            <button className="btn btn-secondary">Car </button>

            <div className="map">
              <b>From BARTON at GRAYS to Location</b>
              <ol type="1">
                <li>
                  Head south on Gray Rd/Grays Rd toward Barton St E Street View
                </li>
                <li>Turn right at the 1st cross street onto Barton St E</li>
                <li>Turn left onto Birch Ave</li>
                <li>Turn right onto Cannon St E</li>
                <li>Sharp left onto York Blvd</li>
                Turn left onto Bay St N
              </ol>
              <img src={singleBank[0].map} className="single-img3" />
            </div>
          </div>
        </div>
      </div>
      {/* <BankPrograms></BankPrograms> */}

      <ShortFooter></ShortFooter>
    </div>
  );
};

export default SingleBank;
