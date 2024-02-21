// import React from "react";
// // // import ButtonLink from "./ButtonLink";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">
//           <Brand />
//         </div>
//         <div className="nav-elements">
//           <ul>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/register">Register</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
