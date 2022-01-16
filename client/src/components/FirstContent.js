import React from "react";
import home from "../data/home";

const FirstContent = () => {
  return (
    <>
      <div className="firstContentContainer">
        <div className="firstTextContainer">Food is a human right</div>
        <div className="firstTextContainer">
          <b>
            Find a food bank or meal plan with Feeding Ontario that works for
            you!
          </b>
        </div>
        <div className="firstImageContainer">
          <div className="">
            <img src={home[0].image} className="smallImg" />
            <h2 className="desc">{home[0].description}</h2>
          </div>
          <div className="">
            <img src={home[1].image} className="smallImg" />
            <h2 className="desc">{home[1].description}</h2>
          </div>
          <div className="">
            <img src={home[3].image} className="smallImg" />
            <h2 className="desc">{home[3].description}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstContent;
