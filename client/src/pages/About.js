import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";

const About = () => {
  return (
    <div>
      <Header></Header>
      <Searchbar></Searchbar>
      <div>
        <div className="firstTextContainer">
          About page stuff
        </div>
      </div>
    </div>
  );
};

export default About;
