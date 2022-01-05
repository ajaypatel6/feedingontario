import React from "react";
import home from "../data/home";

const FirstContent = () => {
  return (
    <>
      <div>
        <div className="firstTextContainer">
          Food is a human right <b>Food security is important </b>
        </div>
        <div className="firstImageContainer">
          <div className="firstLeftImage">
            Image 1<h2>{home[0].description}</h2>
            <img src={home[0].image} className="smallImg" />
          </div>
          <div className="firstRightImage">
            Image 2<h2>{home[1].description}</h2>
            <img src={home[1].image} className="smallImg" />
          </div>{" "}
          <div>Image 3</div>
        </div>
      </div>
    </>
  );
};

export default FirstContent;
