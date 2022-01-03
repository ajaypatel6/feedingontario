import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="">
      <h1 className="">Navigated to a bad link</h1>
      <Link to="/" className="btn-back">
        back home
      </Link>
    </div>
  );
};

export default Error;