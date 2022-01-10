import React, { useState, useRef, useEffect } from "react";

import { FaBars } from "react-icons/fa";
import logo from "../images/FeedingWhite.png";

import { links } from "../data/links";

const Header = () => {

  // useEffect(() => {
  //   const linksHeight = linksRef.current.getBoundingClientRect().height;
  //   if (showLinks) {
  //     linksContainerRef.current.style.height = `${linksHeight}px`;
  //   } else {
  //     linksContainerRef.current.style.height = "0px";
  //   }
  // }, [showLinks]);

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink header-yellow"
        id="mainNav"
      >
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="/">
            <div className="topLogo">
              <img src={logo} alt="logo" className="smallLogo" />
            </div>
          </a>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="FaBars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto header-links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url} className="links-text">{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
