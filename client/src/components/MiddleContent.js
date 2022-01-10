import React from "react";
import home from "../data/home";

const MiddleContent = () => {
  return (
    <>
      <div className="middleTextContainer">Help is available</div>
      <div className="middleStuffContainer">
      <div className="firstLeftImage">
            Image 1<h2>{home[2].description}</h2>
            <img src={home[2].image} className="smallImg" />
          </div>
          <div className="firstRightImage">
            Image 2<h2>{home[3].description}</h2>
            <img src={home[3].image} className="smallImg" />
          </div>{" "}
      </div>
    </>
  );
};

export default MiddleContent;
