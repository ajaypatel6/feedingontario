import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Bars/Searchbar";
import ShortFooter from "../components/ShortFooter";

const About = () => {
  return (
    <div>
      <Header></Header>
      <Searchbar></Searchbar>
      <div>
        <div className="aboutContainer">
          <h2>About</h2>
          <p>we are here 2 help</p>
        </div>
      </div>
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default About;
