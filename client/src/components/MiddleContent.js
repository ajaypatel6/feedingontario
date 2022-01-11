import React from "react";
import home from "../data/home";

const MiddleContent = () => {
  return (
    <>
      <div className="middleContentContainer">
        <div className="middleTextContainer">Help is available</div>
        <div className="middleImageContainer">
          <div className="leftMiddleImage">
            <img src={home[2].image} className="smallImg " />
            <h2 className="rightImageText">{home[2].description}</h2>
          </div>
          <div className="rightMiddleImage">
            <h2 className="leftImageText">{home[4].description}</h2>
            <img src={home[4].image} className="smallImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleContent;
