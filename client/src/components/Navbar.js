import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <a href="index.html">PISH</a>
        <ul>
          <li>
            <i class="fa-solid fa-house"></i>Home
          </li>
          <li>
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
            Account
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
