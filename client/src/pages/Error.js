import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div className="">
      <h1 className="">Navigated to a bad link</h1>
      <Link to="/" className="btn-back">
        back home
      </Link>
      <Footer></Footer>
    </div>
  );
};

export default Error;