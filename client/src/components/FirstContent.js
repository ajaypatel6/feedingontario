import React from "react";
import home from "../data/home";

const FirstContent = () => {
  return (
    <>
      <div>
        <div className="firstTextContainer">Food is a human right</div>
        <div className="firstTextContainer">
          <b>Food security is important </b>
        </div>
        <div className="firstImageContainer">
          <div className="firstLeftImage">
            <img src={home[0].image} className="smallImg" />
            Image 1<h2>{home[0].description}</h2>
          </div>
          <div className="firstRightImage">
            Image 2<h2>{home[1].description}</h2>
            <img src={home[1].image} className="smallImg" />
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default FirstContent;
