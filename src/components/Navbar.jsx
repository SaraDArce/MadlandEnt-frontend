import React from "react";
// import ButtonLink from "./ButtonLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  text,
  setText,
  searchInput,
  handleSearchInput,
  handleSearch,
  setSearchInput,
  setSelectedCategory,
}) {
  //const userId = localStorage.getItem("userId");
  const logout = () => {
    localStorage.clear();
    setText("Login");
  };

  const resetChooseCategory = () => {
    setSearchInput("");
    setSelectedCategory("");
  };

  return (
    <div id="navbar">
      <div id="logo">
        <Link to="/artists">Madland Entertainment</Link>
      </div>
      <div id="search">
        <form className="search-form">
          <input
            id="search-input"
            type="text"
            className="searchInput"
            placeholder="Search by Artist or Genre"
            onChange={handleSearchInput}
            value={searchInput}
          />
          &nbsp;&nbsp;
          <button
            id="search-button"
            type="submit"
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </form>
      </div>
      <div id="nav-buttons">
        <Link to="/about">About</Link>&nbsp;&nbsp;
        {/* <Link to="/artists" onClick={resetChooseCategory}>
          Artists
        </Link> */}
        {/* &nbsp;&nbsp;
        {localStorage.getItem("userId") ? (
          <Link onClick={logout} to="/">
            {" "}
            {text}{" "}
          </Link>
        ) : (
          <Link to="/login"> {text} </Link>
        )}
        {localStorage.getItem("userId") ? (
          <Link to={`/userprofile/${localStorage.getItem("userId")}`}>
            My profile{" "}
          </Link>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

export default Navbar;
