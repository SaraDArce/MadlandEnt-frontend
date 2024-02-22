import React from "react";
// import ButtonLink from "./ButtonLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({}) {
  return (
    <>
      <div id="navbar">
        <div id="logo">
          <Link to="/artists">Madland</Link>
        </div>

        <div id="nav-buttons">
          <Link to="/about">About</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/register">Register</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/bookingForm">Book</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
