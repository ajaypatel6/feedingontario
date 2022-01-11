import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Bars/Searchbar";
import ShortFooter from "../components/ShortFooter";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <Searchbar></Searchbar>
      <div className="aboutContainer">
        <h2>Contact</h2>
      </div>
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default Contact;
